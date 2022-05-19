import { action } from "@storybook/addon-actions";
import React from "react";

import AddSubstract from "../components/AddSubstract/AddSubstract";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/AddSubstract",
  component: AddSubstract,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AddSubstract {...args} />;

const onAdd = (newCount) => {
  console.log(onAdd);
};

const onSubstract = (newCount) => {
  console.log(onSubstract);
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "secondary",
  initialCount: 0,
  limitCount: 10,
  onAdd: action("onAdd", onAdd),
  onSubstract: action("onSubstract", onSubstract),
};
