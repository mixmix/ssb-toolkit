const Vue = require('vue/dist/vue.js')
const App = require('./app.js')

window.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div')
  root.id = 'app'
  document.body.appendChild(root)

  new Vue(App) // eslint-disable-line
})
