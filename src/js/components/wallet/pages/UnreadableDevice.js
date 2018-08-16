/* @flow */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Notification } from '~/js/components/common/Notification';
import * as TrezorConnectActions from '~/js/actions/TrezorConnectActions';

import type { State, Dispatch } from '~/flowtype';

type Props = {
    acquiring: boolean;
    acquireDevice: typeof TrezorConnectActions.acquire
}

const UnreadableDevice = (props: Props) => {
    return (
        <section className="acquire">
            <Notification
                title="Unreadable device"
                message="Please install bridge"
                className="error"
                cancelable={false}
            />
        </section>
    );
};

export default connect(
    (state: State) => ({
        acquiring: state.connect.acquiring,
    }),
    (dispatch: Dispatch) => ({
        acquireDevice: bindActionCreators(TrezorConnectActions.acquire, dispatch),
    }),
)(UnreadableDevice);