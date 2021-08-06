const config = require('config')
const WA = require('./wa')
const axios = require('axios')

const url = `wss://${config.get('main.url')}/room`
  + `?roomId=${config.get('main.roomId')}`
  + `&token=${config.get('main.token')}`
  + `&name=${config.get('main.name')}`
  + `&${config.get('main.characterLayers')}`
  + `&x=${config.get('main.position.x')}`
  + `&y=${config.get('main.position.y')}`
  + '&top=715&bottom=1088&left=0&right=1280' // Don't know what that's for... Is it the size of the listen room

const slackURL = config.get('slack.url')

function postMessage (text) {
  axios.post(slackURL, { text })
}

function main () {  
  const wa = new WA(url)

  wa.on('userJoined', function (name) {
    postMessage(`${name} joined the office.`)
  })

  wa.on('userLeft', function (name) {
    postMessage(`${name} left the office.`)
  })

}

main()