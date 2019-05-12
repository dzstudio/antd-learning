import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducers from '../store/reducers'
import Routes from '../configs/router.config'

const initValues = {
  agents: {
    summary: {
      building: 2,
      idle: 2,
      history: [
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test",
        "bjstdmngbgr02/Acceptance_test"
      ]
    },
    agentList: [
      {
        id: 1,
        email: 'bjstmngbgr02.thoughtworks.com',
        status: 'idle',
        ip: '192.168.1.2',
        resources: ['firefox3', 'core-duo', 'chrome', 'mysql'],
        target: '/var/lib/cruise-agent'
      },
      {
        id: 2,
        email: 'bjstmngbgr03.thoughtworks.com',
        status: 'building',
        ip: '192.168.1.2',
        resources: ['firefox3', 'mysql', 'core-duo'],
        target: '/var/lib/cruise-agent'
      },
      {
        id: 3,
        email: 'bjstmngbgr04.thoughtworks.com',
        status: 'building',
        ip: '192.168.1.3',
        resources: ['firefox3', 'mysql', 'core-duo'],
        target: '/var/lib/cruise-agent'
      },
      {
        id: 4,
        email: 'bjstmngbgr05.thoughtworks.com',
        status: 'idle',
        ip: '192.168.1.4',
        resources: [],
        target: '/var/lib/cruise-agent'
      }
    ]
  }
}

// 创建redux数据store
const store = applyMiddleware(
  thunkMiddleware // 引入redux-thunk中间件以支持异步action
)(createStore)(rootReducers, initValues)

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
