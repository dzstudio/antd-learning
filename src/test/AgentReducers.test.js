import AgentReducer from '../store/reducers/agentReducer';
import * as AgentActions from '../store/actions/agentActions';

// Agents reducer test.
describe('agents/reducer', () => {
    // Delete resource reducer test.
    it('should delete resource from the agent.resource', () => {
        const state = {
            agentList: [{
                id: 1,
                email: 'bjstmngbgr02.thoughtworks.com',
                status: 'idle',
                ip: '192.168.1.2',
                resources: ['firefox3', 'core-duo', 'chrome', 'mysql'],
                target: '/var/lib/cruise-agent'
            }]
        }

        const name = 'chrome'
        const agentId = 1
        const action = AgentActions.agentResourceDel(agentId, name)
        const newState = AgentReducer(state, action)

        expect(newState.agentList[0].resources.length).toBe(3);
        expect(newState.agentList[0].resources).toEqual(
            expect.not.arrayContaining([name])
        );
    });

    // Add resource reducer test.
    it('should add a resource to the agent.resource', () => {
        const state = {
            agentList: [{
                id: 1,
                email: 'bjstmngbgr02.thoughtworks.com',
                status: 'idle',
                ip: '192.168.1.2',
                resources: ['firefox3', 'core-duo', 'mysql'],
                target: '/var/lib/cruise-agent'
            }]
        }

        const name = 'chrome'
        const agentId = 1
        const action = AgentActions.agentResourceAdd(agentId, [name])
        const newState = AgentReducer(state, action)

        expect(newState.agentList[0].resources.length).toBe(4);
        expect(newState.agentList[0].resources).toEqual(
            expect.arrayContaining([name])
        );
    });
});
