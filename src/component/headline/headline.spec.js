import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
// import checkPropTypes from 'check-prop-types';
import { findByTestAtrr, checkProps } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Componenr', () => {

    describe('Checking PropTypes', () => {
        it('It should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false,
                }]
            };

            // const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name); // actual props from headline, expected test props, what we are testing, name of component through which acquire
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndifined();

        });
    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
            };
            wrapper = setUp(props);
        });
        
        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });

    });

});