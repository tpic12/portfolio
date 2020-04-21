import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Qtrail from "./Qtrail";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Qtrail />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
