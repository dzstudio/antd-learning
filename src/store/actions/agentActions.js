import { AGENT_RES_ADD, AGENT_RES_DEL } from './actionTypes'

export const agentResourceAdd = (agentId, name) => ({
    type: AGENT_RES_ADD,
    agentId: agentId,
    name: name
})

export const agentResourceDel = (agentId, name) => ({
    type: AGENT_RES_DEL,
    agentId: agentId,
    name: name
})
