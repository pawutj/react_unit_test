import React from "react";
import Todo from "./Todo";

import { configure, shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> Test", () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: "buy milk",
  };

  let component;
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it("should render <Todo />", () => {
    expect(component).toHaveLength(1);
    expect(component.find("li"));
    expect(component.props().children).toEqual("buy milk");
  });

  it("should render <Todo /> Props", () => {
    expect(component.props().children).toEqual("buy milk");
  });

  it("should render <Todo /> Props", () => {
    component.setProps({ text: "buy coke" });
    expect(component.props().children).toEqual("buy coke");
  });

  it("call onClick", () => {
    component.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("Todo Style", () => {
  const mockFn = () => jest.fn();
  it("should not have line style when incomplate", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="go shopping" />
    );
    expect(component.props().style).toEqual({ textDecoration: "none" });
  });
});
