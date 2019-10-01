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

// fs.readdir('./node_js/les_1/HW', {}, (err, files)=>{  //прочитати діректорію (папку), що в ній є
//     console.log(files);
// });


// fs.rename('./node_js/les_1/HW', './node_js/les_1/HW', err => {  // перейменовує папки і файли
// //     if (!err){
// //         console.log('ok');
// //     }
// // });

// fs.mkdir('./node_js/les_1/HW/dir', {}, err => { // make dir - створити діректорію (папку)
//     if (!err){
//         console.log('OK');
//     }
// });

// let writeStream = fs.createWriteStream('./node_js/les_1/HW/dir/text2.txt');  // створити файл через стрім
// writeStream.write('Hello World');

// let readStream = fs.createReadStream('./node_js/les_1/HW/dir/text2.txt');  // прочитати файл через стрім
// readStream.on('data', function (shosi) {
//     console.log(shosi.toString());
// });

let writeStream = fs.createWriteStream('./node_js/les_1/HW/dir/test22.txt');  // створити файл через стрім
let readStream = fs.createReadStream('./node_js/les_1/HW/dir/text.txt');  // скопіювати з старого файла в новий
readStream.on('data', function (blabla) {
    writeStream.write(blabla)
});
// for (let i = 0; i < 100; i++) {
//     writeStream.write('Hello World ');
console.log('Ok');





