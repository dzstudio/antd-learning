import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../pages/app';

const { mount }=Enzyme
Enzyme.configure({ adapter: new Adapter() })

describe('User login test suite', () => {

    // Login render test.
    it('should display login page', () => {
        const name ='Log in'
        let app = mount(<App />)
        
        expect(app.find('button').text()).toBe(name);
    })
});


