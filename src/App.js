import React from "react";
import ComponentsA from "./Components/ComponentsA";
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    < >
    {/* <Provider store = {store}>
    </Provider> */}
      <ComponentsA />
    </>
  );
}

export default App;
