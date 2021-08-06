const WebSocket = require('ws')
const EventEmitter = require('events')
const { RoomManagerClient } = require('../generated/messages_grpc_pb')

class WA extends EventEmitter {

  constructor (url) {
    super()

    this.ws = new WebSocket(url)
    this.users = new Map()
    
    this.ws.on('open', this.onOpened.bind(this))
    this.ws.on('message', this.onMessage.bind(this))
    this.ws.on('error', this.onError.bind(this))
  }

  onOpened () {
    console.log('opened')
    setInterval(() => {
        this.ws.send('')
    }, 20000)
  }

  onMessage (data) {
    let response = RoomManagerClient.service.joinRoom.responseDeserialize(data)
        
    if (response.getMessageCase() === 1) {
      let m = response.getBatchmessage()
      let payloadList = m.getPayloadList()

      for (const payload of payloadList) {
        if (payload.hasUserjoinedmessage()) {
          let userjoinedMessage = payload.getUserjoinedmessage()
          console.log(`${userjoinedMessage.getName()} has joined the office`)
          this.users.set(userjoinedMessage.getUserid(), userjoinedMessage.getName())
          this.emit('userJoined', userjoinedMessage.getName())
        }
        if (payload.hasUserleftmessage()) {
          let userleftMessage = payload.getUserleftmessage()
          let username = this.users.get(userleftMessage.getUserid())
          console.log(`${username} has left the office`)
          this.users.delete(userleftMessage.getUserid())
          this.emit('userLeft', username)
        }
      }
    } else {
      console.log(`Got Message ${response.getMessageCase()}`)
    }
  }

  onError (err) {
    console.error(err)
  }
}

module.exports = WA