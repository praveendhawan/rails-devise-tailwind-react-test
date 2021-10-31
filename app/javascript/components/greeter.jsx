import React from 'react'
import ReactServer from 'react-dom/server'
import ReactDOM from 'react-dom'

let Greet = () => <h1>Hello, world!</h1>

container = document.getElementById('myapp')

props = {
  email: container.getAttribute('data-user-email'),
  signInUrl: container.getAttribute('data-signin-url'),
  signUpUrl: container.getAttribute('data-signup-url'),
  logOutUrl: container.getAttribute('data-logout-url')
}

function LoggedInGreeter(props) {
  return <h1>
    <span> Hello, {props.email}! </span>
    <a data-method="delete" href={props.logOutUrl}>Log Out</a>
  </h1>
}

function GuestGreeter(props) {
  return <h1>
    <span> Hello, Guest! </span>
    <a href={props.signInUrl}>Log In</a>
    <a href={props.signUpUrl}>Sign Up</a>
  </h1>
}


if (props.email) {
  element = LoggedInGreeter(props)
} else {
  element = GuestGreeter(props)
}

ReactDOM.render(
    element,
    container
);
