// load libraries needed.
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');


const dotenv = require('dotenv').config(); console.log(dotenv);
console.log(process.env.AJ_HASH_SALT);
const SERVER_SALT = `AJ_JSBundle_ExpressMiddleWaresOnNodeServer`;
const SERVER_SALT_ENV = (process.env.AJ_HASH_SALT !== undefined) ? SERVER_SALT + process.env.AJ_HASH_SALT : SERVER_SALT;

const sha256 = require('js-sha256').sha256;
console.log({ SERVER_SALT: sha256(SERVER_SALT), SERVER_SALT_ENV: sha256(SERVER_SALT_ENV) });

const jwt = require('jwt-simple');

const AJ_EXPRESS_ALLMIDWARE_NODE_SERVER_MAIN = module.exports = {

    appStartNUseAllMware(myPort) {
        app.use(cors());
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        app.use(bodyParser.json({ limit: '50mb' }));

        app.set('port', process.argv[2] || process.env.PORT || myPort || 6805);
        var server = app.listen(app.get('port'), () => {
            console.log('Express server listening at http://(' + server.address().family + ')127.0.0.1:' + server.address().address + server.address().port);
        });
    },

    express, app, path, fs, cors, bodyParser, multer, dotenv, sha256, jwt, SERVER_SALT, SERVER_SALT_ENV
}