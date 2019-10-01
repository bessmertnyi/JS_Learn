/* Зробити функцію, яка буде робити профайли стуентів по групах.
    Створити папка jscx-1800 та jscx-2000
В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten.
В той файл потрібно записати інфу про студента. ЙОго данні. Довільні.
    Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати в папку з профіайлом студента стрімами.
* Поміняти місцями студентів з 18 та з 20 години   */

const {createDir, createDirStudent} = require('./sc.js');

createDir('jscx-1800');
createDir('jscx-2000');

createDirStudent('jscx-2000', 'TarasBosyi', 'TarasBosyi',
    {firstName: 'Taras', lastName: 'Bosyi', age: 29
    });

createDirStudent('jscx-2000', 'RomanBosyi', 'RomanBosyi',
    {firstName: 'Roman', lastName: 'Bosyi', age: 24
    });

createDirStudent('jscx-1800', 'ViktorOkten', 'ViktorOkten',
    {firstName: 'Viktor', lastName: 'Kmin', age: 23
});








