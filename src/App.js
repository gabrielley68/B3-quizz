import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount() {
        /*
        fetch('http://localhost:3006/api/save', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({b: 'Textual content'})
        })
            .then(value => {

            })
            .catch(reason => {

            })
            */
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
