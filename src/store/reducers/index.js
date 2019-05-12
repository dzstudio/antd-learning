import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import agentReducer from './agentReducer'

const rootReducers = combineReducers({
    routing,
    agents: agentReducer,
})

export default rootReducers