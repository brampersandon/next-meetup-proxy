const meetup = require('meetup-api')({ key: process.env.MEETUP_KEY })

exports.handle = function(e, ctx, cb) {
  meetup.getEvents({ 'group_urlname': 'javascriptmn' }, (err, events) => {
    if (err) cb(err)
    cb(null, events.results[0])
  })
 }
