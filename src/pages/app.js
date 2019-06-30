import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducers } from '../store'
import Routes from '../configs/router.config'

const initValues = {
  agents: {
    summary: {
      building: 2,
      idle: 2,
      history: [
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test",
        "system02/Acceptance_test"
      ]
    },
    agentList: [
      {
        id: 1,
        email: 'username02.dillonz.com',
        status: 'idle',
        ip: '192.168.1.2',
        resources: ['firefox3', 'core-duo', 'chrome', 'mysql'],
        target: '/var/www/html'
      },
      {
        id: 2,
        email: 'username03.dillonz.com',
        status: 'building',
        ip: '192.168.1.2',
        resources: ['firefox3', 'mysql', 'core-duo'],
        target: '/var/www/html'
      },
      {
        id: 3,
        email: 'username04.dillonz.com',
        status: 'building',
        ip: '192.168.1.3',
        resources: ['firefox3', 'mysql', 'core-duo'],
        target: '/var/www/html'
      },
      {
        id: 4,
        email: 'username05.dillonz.com',
        status: 'idle',
        ip: '192.168.1.4',
        resources: [],
        target: '/var/www/html'
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
