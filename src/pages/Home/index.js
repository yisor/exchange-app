import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { user } from '../../redux/actions';

class Home extends Component {
  render() {
    return (
      <WingBlank>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={() => { this.props.login({ id: 1, name: '测试' }) }}>
          测试
        </Button>
      </WingBlank>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (act) => {
    dispatch(user.login(act))
  },
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);