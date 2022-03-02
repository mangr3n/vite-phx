// import 'vite/dynamic-import-polyfill';

import './vendor/phx-app.css'
import './vendor/phx-app.js'


import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
