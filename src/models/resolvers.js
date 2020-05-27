const { getContributions } = require('../controllers/controller');

const resolvers = {
    Query: {
        getContributions
    }
};

module.exports = {
    resolvers
}