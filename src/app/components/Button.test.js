/* global expect*/
import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Button>Facebook</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
