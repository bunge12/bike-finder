import React from "react";

import App from "../App";

export default {
  title: "UI/App",
  component: App,
};
const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
