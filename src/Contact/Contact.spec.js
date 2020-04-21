import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Contact from "./Contact";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Contact />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
