import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProjectLanding from "./ProjectLanding";

describe("<Landing />", () => {
  it("renders by default", () => {
    const wrapper = shallow(<ProjectLanding />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
