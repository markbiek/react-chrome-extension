import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TestComponent from './components/Test';

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="container">
                    <h1>Simple Chrome Extension</h1>

                    <TestComponent />
                </div>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));
