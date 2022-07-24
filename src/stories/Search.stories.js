import React from "react";

import Search from "../components/Search";

export default {
  title: "UI/Search",
  component: Search,
  argTypes: { onSearch: { action: "clicked" } },
};
const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
