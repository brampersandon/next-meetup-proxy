const MEETUP_KEY = process.env.MEETUP_KEY
if (!MEETUP_KEY) throw Error('Please provide a MEETUP_KEY variable')

const MEETUP_NAME = process.env.MEETUP_NAME
if (!MEETUP_NAME) throw Error('Please provide a MEETUP_NAME environment variable')

const meetup = require('meetup-api')({ key: process.env.MEETUP_KEY })
const cors = require('micro-cors')({
  origin: 'http://javascriptmn.com'
})

exports.default = cors(async (req, res) => {
  return await (new Promise((resolve, reject) => {
    meetup.getEvents({ 'group_urlname': MEETUP_NAME }, (err, events) => {
      if (err) {
        reject(err)
        return
      }
      // The 'zeroeth' event always has the latest! Sure hope it exists!
      resolve(events.results[0])
    })
  }))
 })
