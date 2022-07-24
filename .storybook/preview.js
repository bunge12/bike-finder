import { MantineProvider } from "@mantine/core";
import { addDecorator } from "@storybook/react";
import theme from "../src/styling/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: "mobile2",
  },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
  },
};

addDecorator((story) => (
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    {story()}
  </MantineProvider>
));
