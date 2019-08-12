import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// Shallow- allows you to test one layer into a component

//configure enzyme to use the adapter for react 16
//would need a different adapter with a different version of react
Enzyme.configure({ adapter: new EnzymeAdapter() });

//you can use (test) or (it) with jest interchangably
//this test will fail if ANY error is thrown
test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});

// Enzyme .debug logs our wrapper as a sting.
// Jest expect().toBeTruthy() will only pass if what you expect returns something

// Jest includes snapshot testing, but you can't use snapshots in TDD
