import * as ActionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
    const { agentId, name, names } = action
    switch (action.type) {
        case ActionTypes.AGENT_RES_ADD:
            // The add resource reducer.
            const items = state.agentList.map((agent) => {
                if (agent.id === agentId) {
                    // Trim spaces for each resource name.
                    let resNames = names.map((item) => {
                        return item.trim()
                    })
                    // Filter out the empty resource name.
                    resNames = resNames.filter((resName) => {
                        return resName.length > 0
                    })
                    // Merge names and return a new resource names array.
                    let res = [...agent.resources, ...resNames]
                    res =  Array.from(new Set(res))
                    return {...agent, resources : res}
                } else {
                    return agent
                }
            })
            return {...state, agentList : items}
        case ActionTypes.AGENT_RES_DEL:
            // The delete resource reducer.
            let agentList = state.agentList.map((agent) => {
                if (agent.id === agentId) {
                    // Filter out the target resource.
                    let res = agent.resources.filter((resName) => {
                        return resName !== name
                    })
                    // Create a new state object with filtered resources.
                    return {...agent, resources : res}
                } else {
                    return agent
                }
            })
            return {...state, agentList : agentList}
        default:
            return state
    }
}