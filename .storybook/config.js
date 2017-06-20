import { configure } from "@storybook/react";

function loadStories() {
  require("../src/app/components");
}

configure(loadStories, module);
