import "./App.css";

import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Header from "./components/Header";

import { RouterProvider } from "react-router-dom";

import { appRouter } from "./utils/routes";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
