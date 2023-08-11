import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appRouter from "./routing";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
