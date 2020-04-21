import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Linus from "./Linus";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Linus />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
