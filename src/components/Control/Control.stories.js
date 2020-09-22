import React from "react";
import { storiesOf } from "@storybook/react";

import Control from "./Control";
import description from "./Control.md";

storiesOf("Control", module).add("Overview", () => <Control />, {
  notes: { markdown: description }
});
