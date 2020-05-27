import axios from 'axios'
require('dotenv').config()

export const getContributions = async (parent, args, context) => {
    return axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.KEY}`,
        },
        data: {
          query: `
            {
                user(login: "${args.username}") {
                    contributionsCollection {
                      contributionCalendar {
                        weeks {
                          contributionDays {
                            contributionCount
                            date
                          }
                        }
                      }
                    }
                  }
            }
            `
        }
      }).then(({data}) => {
        const { weeks } = data.data.user.contributionsCollection.contributionCalendar;
        const Days = weeks.reduce((acc, { contributionDays }) => {
          contributionDays.map((day) => acc.push({ date: day.date, contributionCount: day.contributionCount }));
          return acc;
        }, []);
        console.log({weeks, Days})
        return {weeks, days: Days}
      }).catch(error => console.log(error))
}