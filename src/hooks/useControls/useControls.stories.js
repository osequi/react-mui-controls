import React from "react";
import { storiesOf } from "@storybook/react";

import useControls from "./useControls";
import description from "./useControls.md";

storiesOf("useControls", module).add("Overview", () => <useControls />, {
  notes: { markdown: description }
});
