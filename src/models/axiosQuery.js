const axiosQuery = (username) => `
    {
        user(login: "${username}") {
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

module.exports = {
    axiosQuery
}