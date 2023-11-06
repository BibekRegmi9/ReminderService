const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { createChannel } = require('./utils/messageQueue');

// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controller/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    const channel = await createChannel();

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
        // jobs();
    })


    // sendBasicEmail(
    //     'support@admin.com',
    //     '1016matrixbibek@gmail.com',
    //     'For testing only',
    //     'This mail is for support, Hope you are doing well'
    // );
    

}

setupAndStartServer();