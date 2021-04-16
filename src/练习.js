import React from 'react'
import ReactDom from "react-dom"

let ul = React.createElement(
  'ul',
  {
    id:'box',
    className:'red'
  },
  React.createElement('li',null,'one'),
  React.createElement('li',null,'two'),
  React.createElement('li',null,'three')
)
ReactDom.render(ul,document.getElementById('root'))
