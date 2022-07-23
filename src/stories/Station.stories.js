import React from "react";

import Station from "../components/Station";

export default {
  title: "UI/Station",
  component: Station,
};
const Template = (args) => <Station {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
