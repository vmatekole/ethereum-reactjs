// This file controls the shape of the root state tree
import client from './apolloClient';
import { combineReducers } from "redux";

import components from "./components/components.reducer";
import scenes from "./scenes/scenes.reducer";
import services from "./services/services.reducer";

const reducer = combineReducers({
  components,
  scenes,
  services,
  apollo: client.reducer()
});

export default reducer;
