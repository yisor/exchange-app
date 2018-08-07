
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabBar } from 'antd-mobile';
import { push } from 'react-router-redux';

class Main extends Component {
  render() {
    const { tab, children } = this.props;
    return (
      <div style={{
        position: 'fixed',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
      }}
      >
        <div style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: '3',
        }}
        >
          <TabBar
            unselectedTintColor="#949494"
            barTintColor="white"
            hidden={false}
          >
            <TabBar.Item
              title="主页"
              key="home"
              selected={tab === 'home'}
              icon={<div />}
              selectedIcon={<div />}
              onPress={() => {
                this.props.changeUrl('/');
              }}
            />

            <TabBar.Item
              title="我的"
              key="mine"
              icon={<div />}
              selectedIcon={<div />}
              selected={tab === 'mine'}
              onPress={() => {
                this.props.changeUrl('/about');
              }}
            />
          </TabBar>
        </div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  changeUrl: (url) => {
    dispatch(push(url))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);