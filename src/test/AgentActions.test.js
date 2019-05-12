import * as ActionTypes from '../store/actions/actionTypes';
import * as AgentActions from '../store/actions/agentActions';

// Agents actions test.
describe('agents/actions', () => {
    // Delete resource action test.
    it('should create an agentResourceDel to delete resource', () => {
        const name = 'chrome'
        const agentId = 1
        const action = AgentActions.agentResourceDel(agentId, name)

        expect(action.name).toBe(name);
        expect(action.agentId).toBe(agentId);
        expect(action.type).toBe(ActionTypes.AGENT_RES_DEL);
    });

    // Add resource action test.
    it('should create an agentResourceAdd to add resource', () => {
        const name = 'chrome'
        const agentId = 1
        const action = AgentActions.agentResourceAdd(agentId, [name])

        expect(action.names).toEqual(
            expect.arrayContaining([name])
        );
        expect(action.agentId).toBe(agentId);
        expect(action.type).toBe(ActionTypes.AGENT_RES_ADD);
    });
});
