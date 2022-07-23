import React from "react";

import QuantityInputs from "../components/QuantityInputs";

export default {
  title: "UI/QuantityInputs",
  component: QuantityInputs,
};
const Template = (args) => <QuantityInputs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
