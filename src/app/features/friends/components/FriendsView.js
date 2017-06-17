import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from 'react-helmet'
import { actionCreators as friendsActions, selector } from '../';
import FriendsLayout from './FriendsLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(friendsActions, dispatch)
}))
export default class FriendsView extends Component {
  render() {
    return (
      <div>
        <Helmet><title>FriendsView</title></Helmet>
        <FriendsLayout {...this.props} />
      </div>
    );
  }
}
