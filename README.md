# next-meetup-proxy

A super quick proxy for the [Meetup API](https://meetup.com) aimed at supporting [javascriptmn.com](https://javascriptmn.com).

## Getting Started

1. `yarn install`  
2. Set `MEETUP_KEY` to the meetup.com API key for your meetup: `MEETUP_KEY=MyMeetupAPIKeyGoesHere yarn start`
3. Set `MEETUP_NAME` to the meetup.com pathname for your meetup: `MEETUP_NAME=javascriptmn`
3. The start script will give you a URL. Visit it.

## Dependencies

This is built with Zeit's wonderful `micro` HTTP framework, and deployed on `now`.