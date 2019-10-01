
const fs = require('fs');
fs.readFile('./file.txt', {}, (err, data)=>{
    console.log(data.toString());
});

let data = 'Privetiki'
fs.writeFile('./text.txt', data, {flags: 'a'}, (err) => {
    if (!err) {
        console.log('OK')
    }
});
