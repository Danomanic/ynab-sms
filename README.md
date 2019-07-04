YNAB-SMS
=======================
An application which sends an SMS containing your remaining balances of desired categories in your YNAB budget.

Prerequisites
-------------

- [YNAB Account](https://www.youneedabudget.com)
- [MessageBird Account](https://www.messagebird.com/en/)
- [Node.js 8.0+](http://nodejs.org)


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/Danomanic/ynab-sms.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

Configuration
---------------

Create a .env file containing the following:
```bash
YNAB_KEY=<YNAB_KEY>
YNAB_BUDGET_ID=<YNAB_BUDGET_ID>
YNAB_CATEGORIES=<YNAB_CATEGORIES>
MESSAGEBIRD_KEY=<MESSAGEBIRD_KEY>
MESSAGEBIRD_RECIPIENTS=<MESSAGEBIRD_RECIPIENTS>
CRON_CONFIG=<CRON_CONFIG>
```

Example:
```bash
YNAB_KEY=35bbc4be-373c-4791-b9b9-6d7fd4c5cfbc
YNAB_BUDGET_ID=9b7782b7-0f28-4fd8-adb5-6da212e3217b
YNAB_CATEGORIES=ddf43c99-34b7-4c26-9833-9d468322414e,d077fc90-c125-4fc2-b774-82d9fbf9d8de,8174cd30-4fdf-45c5-b663-e83ca0283588
MESSAGEBIRD_KEY=0beffce2-3480-49f2-8091-354b8d11220a
MESSAGEBIRD_RECIPIENTS=+44123123123,+441231123123
CRON_CONFIG="0 8 * * *"
```

Changelog
---------

You can find the changelog for the project in: [CHANGELOG.md](https://github.com/Danomanic/ynab-sms/blob/master/CHANGELOG.md)


Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome. Please open an issue before
submitting a pull request. This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.