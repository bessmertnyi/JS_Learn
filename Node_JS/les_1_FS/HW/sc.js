const fs = require('fs');

exports.createDir = function (nameFolder) {
    fs.mkdir(`./node_js/les_1/hw/${nameFolder}`, {}, err =>{
        if (!err){
            console.log('ok');
        }
    });
};

exports.createDirStudent = function (whereFolder, nameFolder, file, dataStudent) {

    fs.mkdir(`./node_js/les_1/hw/${whereFolder}/${nameFolder}`, {}, err => {
        if (!err){
            console.log('ok');
        }
    });
    let writeStreamFile = fs.createWriteStream(`./node_js/les_1/hw/${whereFolder}/${nameFolder}/${file}.txt`);
    writeStreamFile.write(JSON.stringify(dataStudent))
};