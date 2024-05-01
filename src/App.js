import "./App.css";

import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <div>
          <Header />
          <Body />
        </div>
      </Provider>
    </>
  );
}

export default App;
