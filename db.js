const Cloudant = require('@cloudant/cloudant');

const cloudantInstance = new Cloudant({
    account: process.env.CLOUDANT_USERNAME,
    password: process.env.CLOUDANT_PASSWORD,
    url: 'https://c8e902a2-64a5-4c19-8b60-34b31e6d61cf-bluemix.cloudant.com'
});

async function start() {
    await cloudantInstance.db.create('questionary');
    process.exit(0);
}

// start()
//     .catch((err) => {
//         console.log(err);
//         process.exit(0);
//     });

module.exports = async () => {
    // await cloudantInstance.db.create('questionary');
    return cloudantInstance;
};