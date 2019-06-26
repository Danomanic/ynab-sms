const env = require('dotenv').config();
const ynab = require("ynab");
const ynabAPI = new ynab.API(process.env.YNAB_KEY);

var messagebird = require('messagebird')(process.env.MESSAGEBIRD_KEY);

// Test Message Bird Connection
messagebird.balance.read(function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

// Test YNAB Connection
(async function() {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for(let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`);
  }
})();