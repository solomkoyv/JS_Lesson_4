'use strict';

let money,
  time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expensescCost = +prompt('Во сколько обойдется?', '');

      if ((typeof (expensesItem)) === 'string' &&
        typeof (expensesItem) != '' &&
        typeof (expensesItem) != null &&
        expensesItem.length < 50 &&
        typeof (expensescCost) != null &&
        typeof (expensescCost) != '') {
        console.log(`done`);
        appData.expenses[expensesItem] = expensescCost;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert(`Ежедневный бюджет пользователя = ${appData.moneyPerDay}`);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log(`Минимальный уровень достатка`);
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
      console.log(`Средний уровень достатка`);
    } else if (appData.moneyPerDay > 2000) {
      console.log(`Высокий уровень достатка`);
    } else {
      console.log(`Произошла ошибка`);
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Сумма накоплений?", ""),
        percent = prompt("Под какой процент", "");
      appData.momthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.momthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let optionalExpensesItem = prompt('Введите не обязательную статью расходов в этом месяце', '');

      if ((typeof (optionalExpensesItem)) === 'string' &&
        typeof (optionalExpensesItem) != '' &&
        typeof (optionalExpensesItem) != null &&
        optionalExpensesItem.length < 50) {
        console.log(`done optionalExpenses`);
        appData.optionalExpenses[i] = optionalExpensesItem;
      } else {
        i--;
      }
    }
  },
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt('Что принесет дополнительный доход (Пенечисли через запятую)', '');

      if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
        appData.income = items.split(', ');
        appData.income.push(prompt('Что может что-то еще?'));
        appData.income.sort();
        appData.income.forEach(function (item, i, income) {
          let n = i + 1;
          console.log(n + ' - Способ доп. заработка: ' + item);
        });
      } else {
        i--;
      }
    }
  }
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
}