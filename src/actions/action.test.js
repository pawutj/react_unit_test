import * as actions from "./index";

describe("Test Suite for Actions", () => {
  it("should  create action", () => {
    const text = "go shopping";
    const expectAction = {
      type: "ADD_TODO",
      id: 0,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectAction);
  });

  it("should create action to set visibility", () => {
    const filter = "SHOW_ALL";
    expect(actions.setVisibilityFilter(filter).filter).toEqual("SHOW_ALL");
  });
});
