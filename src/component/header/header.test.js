import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../utils'; // used for refactoring wrapper
import Header from './index';

const setUp = (props={}) => { // passing props and if there is none then empty object
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => { //before each test
        component = setUp();
    });

    it('Should render without errors', () => {
        // const component = shallow(<Header />); // rendering testing component
        // const component = setUp();
        const wrapper = component.find(`[data-test='headerComponent']`); // searching specific class in component
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        // const component = setUp();
        const logo = component.find(`[data-test='logoIMG']`);
        expect(logo.length).toBe(1);
    });

});