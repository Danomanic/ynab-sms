require('dotenv').config();

const ynab = require('ynab');

const ynabAPI = new ynab.API(process.env.YNAB_KEY);
const messagebird = require('messagebird')(process.env.MESSAGEBIRD_KEY);
const dateFormat = require('dateformat');
const budget_id = process.env.YNAB_BUDGET_ID;
const { log } = console;
const now = new Date();
const date = dateFormat(now, "d-mm");
const categories = process.env.YNAB_CATEGORIES.split(',');
const recipients = process.env.MESSAGEBIRD_RECIPIENTS.split(',');

async function getCategory(category) {
    const result = await ynabAPI.categories.getCategoryById(budget_id, category);
    return result;
}

async function sendSms(body) {
    messagebird.messages.create({
        originator: 'Budget',
        recipients: recipients,
        body,
    }, (err, response) => {
        if (err) {
            log(err);
        }
    });
}

(async function() {
    let body = `Remaining Balances (${date}):\n----------------------------------\n`;
    await Promise.all(categories.map(async(category) => {
        const data = await getCategory(category);
        const balance = data.data.category.balance / 1000;
        body = body.concat(`${data.data.category.name} => £${balance}\n`);
    }));
    await sendSms(body);
}());