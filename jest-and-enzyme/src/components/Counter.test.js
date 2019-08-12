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
 * @param {*} state - initial state for setup
 * @returns {shallowWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<Counter {...props} />);
};

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {*} val - value of data-test attribute for search
 * @returns {Shallow wrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return;
};

test("test that counter renders", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-counter']");
  expect(appComponent.length).toBe(1);
});

// expect(wrapper.find("[data-test='component-counter']")).to.have.lengthOf(1)

test("renders increment button", () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at zero", () => {});

test("clicking button increments the counter", () => {});
