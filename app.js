const Client = require('ssb-client')
const Config = require('ssb-config/inject')

const template = `
  <div class='App'>
    <h1>ssb-toolkit</h1>
    <div> {{feedId}} </div>
  </div>
`
const App = { // eslint-disable-line
  el: '#app',
  data: {
    feedId: 'loading...',
    ssb: null
  },
  created () {
    const config = Config()
    Client(config.keys, config, (err, ssb) => {
      this.ssb = ssb
      console.log(err, ssb, this.name)

      ssb.whoami((err, data) => {
        console.log(err, data)
        this.feedId = data.id
      })
    })
  },
  destroyed () {
    console.log('boom gone')
    this.ssb.close()
  },
  template
}

module.exports = App
