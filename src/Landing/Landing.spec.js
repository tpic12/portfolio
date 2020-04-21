import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Landing from "./Landing";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Landing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
