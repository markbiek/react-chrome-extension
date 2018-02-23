import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import store from '../../store';

class TestComponent extends React.Component {
    componentWillMount () {
        chrome.identity.getProfileUserInfo(function (u) {
            var user = Immutable.fromJS(u);

            store.dispatch({
                type: 'GET_USER',
                user
            });
        });
    }

    render () {
        var props = this.props;
        var user = props.user.toObject();

        return (
            <div>
                <p>This is a test component.</p>

                <p>
                    You're signed into Chrome as {user.email}.
                </p>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.testState.get('user')
    };
};

export default connect(mapStateToProps)(TestComponent);
