const fs = require('fs');

// fs.readFile('./file.txt', {}, (err, data)=>{   //читає файл
//     console.log(data.toString());
// });

// let data = 'Privetiki'
// fs.writeFile('./text.txt', data, {flags: 'a'}, (err) => { // записує в файл
//     if (!err) {
//         console.log('OK')
//     }
// });

// fs.appendFile('./text.txt', '\n WRITE SOMESING ELSE', (err)=> {  // дописує щось до файлика
//     if (!err){
//         console.log('OK')
//     }
// });

// fs.appendFile('./text.txt', `\n${Date.now()} WRITE SOMESING ELSE`, (err)=> {  // дописує щось до файлика
// //     if (!err){
// //         console.log('OK')
// //     }
// // });

// fs.stat('./text.txt', {}, function (err, info) {   // інформація про файл
//     console.log(info);
// });

// fs.readdir('./node_js/les_1/lessons', {}, (err, files)=>{  //прочитати діректорію (папку), що в ній є
//     console.log(files);
// });


// fs.rename('./node_js/les_1/lessons', './node_js/les_1/lessons', err => {  // перейменовує папки і файли
// //     if (!err){
// //         console.log('ok');
// //     }
// // });

// fs.mkdir('./node_js/les_1/lessons/dir', {}, err => { // make dir - створити діректорію (папку)
//     if (!err){
//         console.log('OK');
//     }
// });

let writeStream = fs.createWriteStream('./node_js/les_1/lessons/dir/text2.txt');  // створити файл через стрім
writeStream.write('Hello World');

// let readStream = fs.createReadStream('./node_js/les_1/lessons/dir/text2.txt');  // прочитати файл через стрім
// readStream.on('data', function (shosi) {
//     console.log(shosi.toString());
// });

/*let writeStream = fs.createWriteStream('./node_js/les_1/lessons/dir/test222.txt');  // створити файл через стрім
let readStream = fs.createReadStream('./node_js/les_1/lessons/dir/text.txt');  // скопіювати з старого файла в новий
readStream.on('data', function (blabla) {
    writeStream.write(blabla)
});
// for (let i = 0; i < 100; i++) {
//     writeStream.write('Hello World ');
console.log('Ok');*/

// // перенаправляє зразу дані в новий файл
// fs.createReadStream('./node_js/les_1/lessons/dir/text.txt').pipe(fs.createWriteStream('./node_js/les_1/lessons/dir/Newtext.txt'));
// console.log('ok');

// створення ПОМИЛКИ throw new Error
/*function div(firstNumber, secondNumber, cb) {
    setTimeout(() => {
            if (secondNumber === 0) {
                let error = new Error('secondNumber = 0');
                cb(error, null)
            } else {
                let res = secondNumber / firstNumber;
                cb(null, res)
            }
    }, 200)
}

div(20, 0, (error, result) => {
    if (error){
        console.log(error.message)
    } else {
        console.log(result);
    }
});*/

// HTTP ---- МОДУЛЬ СТВОРЕННЯ СЕРВЕРА ЛОКАЛЬНОГО

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) =>{

    let parseUrl = url.parse(req.url);

    switch (parseUrl.pathname) {
        case '/':
            fs.readFile('./index1.html', (err, data)=> {
                res.end(data)
            });
            break;
        case '/info':
            fs.readFile('./info.html', (err, data)=> {
                res.end(data)
            });
            break;
        default:
            fs.readFile('./404.html', (err, data)=> {
                res.end(data)
            });
            break
    }

    // console.log(req);
    // res.end('hello')
});

server.listen(5000, err =>{
    if (err){
        console.log('ERROR')
    } else {
        console.log('Listen 5000')
    }
});




