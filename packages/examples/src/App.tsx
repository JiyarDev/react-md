import React, { FunctionComponent } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Divider, VerticalDivider } from "@react-md/divider";
import { StatesConfig } from "@react-md/states";
import { KeyboardTracker } from "@react-md/wia-aria";

import MenuDemo from "./MenuDemo";
import AppSize from "./AppSize";
import ListDemo from "./ListDemo";
import AvatarDemo from "./AvatarDemo";
import { ToggleRTL } from "./components/ToggleRTL";

const history = createBrowserHistory();

const App: FunctionComponent = () => (
  <Router history={history}>
    <StatesConfig preventColorPollution>
      <KeyboardTracker>
        <ToggleRTL />
        <AppSize />
        <Divider />
        <AvatarDemo />
        <Divider inset />
        <ListDemo />
        <Divider />
        <MenuDemo />
        <Divider />
      </KeyboardTracker>
    </StatesConfig>
  </Router>
);
export default App;
