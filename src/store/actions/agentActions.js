import { AGENT_RES_ADD, AGENT_RES_DEL } from './actionTypes'

// The agent actions constructor.
export const agentResourceAdd = (agentId, names) => ({
    type: AGENT_RES_ADD,
    agentId: agentId,
    names: names
})

export const agentResourceDel = (agentId, name) => ({
    type: AGENT_RES_DEL,
    agentId: agentId,
    name: name
})
