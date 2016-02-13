// Webpack will find these files in node_modules/
import React from 'react'
import ReactDOM from 'react-dom'
import Habitica from 'habitica'

let api = new Habitica({
  uuid: '122476e0-2e38-42bb-8710-56e28f8d70aa',
  token: '1b75b4ba-9328-4898-90f9-31b241cecc06'
})

api.user.get()
  .then((user) => {
    console.log("this is the user object:", user)
  })

// Use React JSX syntax:
ReactDOM.render(
  <h2>this is a react component!</h2>,
  document.getElementById('exampleDiv')
)
