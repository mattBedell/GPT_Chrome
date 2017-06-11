import React, { Component } from 'react';
import Slots from './Containers/Slots_Cont/index.jsx';
import './app.css'

class App extends Component {
    render() {
        return(
            <div className='app'>
                <Slots />
            </div>
        )
    }
}

export default App;