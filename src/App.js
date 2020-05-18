import React, { Component } from 'react';
import './fonts/Montserrat-Regular.ttf'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

class App extends Component {
    state = {
        data: null
    };

    render() {
        return (
            <div className="App">
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}

export default App;
