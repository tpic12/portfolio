import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import About from "./About";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<About />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
