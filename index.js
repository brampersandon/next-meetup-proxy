const meetup = require('meetup-api')({ key: process.env.MEETUP_KEY })
const cors = require('micro-cors')({
  origin: 'http://javascriptmn.com'
})

exports.default = cors(async (req, res) => {
  return await (new Promise((resolve, reject) => {
    meetup.getEvents({ 'group_urlname': 'javascriptmn' }, (err, events) => {
      if (err) {
        reject(err)
        return
      }
      resolve(events.results[0])
    })
  }))
 })
