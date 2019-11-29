import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => { // can be used to refactore test code - wrapper
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};