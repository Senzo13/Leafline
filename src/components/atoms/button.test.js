import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./button"; // changez cela pour votre composant

describe("MyComponent", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
