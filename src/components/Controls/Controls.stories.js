import React from "react";
import { storiesOf } from "@storybook/react";

import Controls from "./Controls";
import description from "./Controls.md";

storiesOf("Controls", module).add("Overview", () => <Controls />, {
  notes: { markdown: description }
});
