const axios = require('axios')
const { axiosQuery } = require('../models/axiosQuery')

require('dotenv').config()

const getContributions = async (parent, args, context) => {
    return axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.KEY}`,
        },
        data: { query: axiosQuery(args.username) }
    })
    .then(({data}) => {
        const { weeks } = data.data.user.contributionsCollection.contributionCalendar;
        const Days = weeks.reduce((acc, { contributionDays }) => {
        contributionDays.map((day) => acc.push({ date: day.date, contributionCount: day.contributionCount }));
        return acc;
        }, []);
        return {weeks, days: Days}
    })
    .catch(error => console.log(error))
}

module.exports = {
    getContributions
}