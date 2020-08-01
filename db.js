const Cloudant = require('@cloudant/cloudant');

const cloudantInstance = new Cloudant({
    url: process.env.CLOUDANT_URL
});

module.exports = async () => {
    const db = await cloudantInstance.use('questionary');
    return db;
};