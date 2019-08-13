import React from "react";

import Counter from "./Counter";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

//DRY refactor to create a shallowWrapper for the Counter component
// could replace all Shallow(<Counter />) with setup()
/**
 * @function setup
 * @param {object} props- component props specific to this setup
 * @param {obj} state - initial state for setup
 * @returns {shallowWrapper}
 */
// const setup = (props = {}, state = null) => {
//   return shallow(<Counter {...props} />);
// };

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * use the below function to replace all of the wrapper.find("[data-test="component-blah-blab)
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {*} val - value of data-test attribute for search
 * @returns {Shallow wrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

//leaving this as example of tests before dry implemetation functions above
test("test that counter renders", () => {
  const wrapper = shallow(<Counter />);
  const appComponent = wrapper.find("[data-test='component-counter']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

// Test Initial State
// wrapper.state selects state in our counter component.
test("counter starts at zero", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking increment increments the counter", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("clicking decrement decrements the counter", () => {
  const counter = 8;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("number display is never negative", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toBe("0");
});
