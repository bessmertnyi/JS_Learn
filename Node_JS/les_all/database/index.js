const Sequelize = require('sequelize');
const fs = require('fs'); // підтримка file system
const {resolve} = require('path'); // працює із шляхами


module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('lun', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};

        function getModels() {
            fs.readdir('./database/models', (err, file) => {
                file.forEach(file => {
                    const modelName = file.split('.')[0];
                    models[modelName] = client.import(resolve(`./database/models/${modelName}`))
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: modelName => models[modelName]
        }
    }

    return {
        getInstance: () => {

            if (!instance) {
                instance = initConnection();
            }

            return instance
        }
    }
})();