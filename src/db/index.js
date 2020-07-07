const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const {DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME} = require('../config');

module.exports = (() => {
    let instance;

    function initConnection() {
        new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
            host: DB_HOST,
            dialect: DB_DIALECT,
        });
        let models = {};

        function getModels() {
            const modelsDir = path.join(process.cwd(), 'src', 'db', 'models');

            fs.readdir(modelsDir, (err, files) => {
                files.forEach(file => {
                    const modelName = path.basename(file, '.js');
                    models[modelName] = require(path.join(modelsDir, modelName));
                });
            });
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
