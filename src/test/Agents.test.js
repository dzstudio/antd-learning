import React from 'react';
import 'jest-localstorage-mock';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../pages/app';

const { mount }=Enzyme
Enzyme.configure({ adapter: new Adapter() })

describe('Agents suite', () => {
    beforeAll(() => {
        sessionStorage.setItem('login_token', 'Dillon')
    })

    afterAll(() => {
        sessionStorage.removeItem('login_token')
    })

    // Agents list render test.
    it('should display agents list', () => {
        let app = mount(<App />)        
        expect(app.find('#agentList .agent-item').length).toBeGreaterThan(0);
    });
});


