import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "./header";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
