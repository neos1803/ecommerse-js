const midtransClient = require('midtrans-client'); // use this if installed via NPM

// initialize core api client object
const core = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : 'SB-Mid-server-nb65P_8UXAbwY6SvNG6VmG7d',
    clientKey : 'SB-Mid-client-Hck65w2VvN0y83gH'
});

module.exports = core