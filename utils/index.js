export const findByTestAtrr = (component, attr) => { // can be used to refactore test code - wrapper
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};