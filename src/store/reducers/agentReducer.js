import * as ActionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    const { agentId, name } = action
    switch (action.type) {
        case ActionTypes.AGENT_RES_ADD:
            return state.map((agent) => {
                if (agent.id === agentId) {
                    let res = agent.resources.filter((resName) => {
                        return resName !== name
                    })
                    res = [...res, name]
                    return {...agent, resources : res}
                } else {
                    return agent
                }
            })
        case ActionTypes.AGENT_RES_DEL:
            return state.map((agent) => {
                if (agent.id === agentId) {
                    let res = agent.resources.filter((resName) => {
                        return resName !== name
                    })
                    return {...agent, resources : res}
                } else {
                    return agent
                }
            })
        default:
            return state
    }
}