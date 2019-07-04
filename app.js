require('dotenv').config();

const schedule = require('node-schedule');
const dateFormat = require('dateformat');
const ynab = require('ynab');
const messagebird = require('messagebird')(process.env.MESSAGEBIRD_KEY);

const { log } = console;

const ynabAPI = new ynab.API(process.env.YNAB_KEY);
const budgetId = process.env.YNAB_BUDGET_ID;

const now = new Date();
const date = dateFormat(now, 'd-mm');
const cronConfig = process.env.CRON_CONFIG;

const categories = process.env.YNAB_CATEGORIES.split(',');
const recipients = process.env.MESSAGEBIRD_RECIPIENTS.split(',');

async function getCategory(category) {
  const result = await ynabAPI.categories.getCategoryById(budgetId, category);
  return result;
}

async function sendSms(body) {
  messagebird.messages.create({
    originator: 'Budget',
    recipients,
    body,
  }, (err, response) => {
    if (err) {
      log(err);
    }
  });
}

async function main() {
  let body = `Remaining Balances (${date}):\n----------------------------------\n`;
  await Promise.all(categories.map(async (category) => {
    const data = await getCategory(category);
    const balance = data.data.category.balance / 1000;
    body = body.concat(`${data.data.category.name} => £${balance}\n`);
  }));
  await sendSms(body);
}

const job = schedule.scheduleJob(cronConfig, () => {
  main();
});
