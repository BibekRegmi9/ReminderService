const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    })


    // sendBasicEmail(
    //     'support@admin.com',
    //     '1016matrixbibek@gmail.com',
    //     'For testing only',
    //     'This mail is for support, Hope you are doing well'
    // );
    cron.schedule('*/2 * * * *', () => {
        console.log('Running a task every two minutes');
    });

}

setupAndStartServer();