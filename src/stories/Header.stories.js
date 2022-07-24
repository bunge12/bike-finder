import React from "react";

import Header from "../components/Header";

export default {
  title: "UI/Header",
  component: Header,
};
const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
