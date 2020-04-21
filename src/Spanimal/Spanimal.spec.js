import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Spanimal from "./Spanimal";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<Spanimal />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
