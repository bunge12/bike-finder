import React from "react";
import { rest } from "msw";
import App from "../App";
import sampleResponse from "./sampleResponse.json";

export default {
  title: "UI/App",
  component: App,
};
const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  msw: [
    rest.post(
      `${process.env.REACT_APP_API_ROUTE}/api/stations`,
      (_req, res, ctx) => {
        return res(ctx.delay(1500), ctx.json(sampleResponse));
      }
    ),
  ],
};
export const Error = Template.bind({});
Error.args = {};
Error.parameters = {
  msw: [
    rest.post(
      `${process.env.REACT_APP_API_ROUTE}/api/stations`,
      (_req, res, ctx) => {
        return res(ctx.delay(1500), ctx.status(500));
      }
    ),
  ],
};
export const NotFound = Template.bind({});
NotFound.args = {};
NotFound.parameters = {
  msw: [
    rest.post(
      `${process.env.REACT_APP_API_ROUTE}/api/stations`,
      (_req, res, ctx) => {
        return res(ctx.delay(1500), ctx.status(204));
      }
    ),
  ],
};
