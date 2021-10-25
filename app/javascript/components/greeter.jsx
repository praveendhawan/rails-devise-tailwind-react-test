import React from 'react'
import ReactServer from 'react-dom/server'
import ReactDOM from 'react-dom'

let Greet = () => <h1>Hello, world!</h1>
console.log(ReactServer.renderToString(<Greet />))


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Praveen',
    lastName: 'Dhawan'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('myapp')
);
