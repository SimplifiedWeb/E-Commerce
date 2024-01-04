import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.jsx";
// eslint-disable-next-line no-undef

// Simple, no?
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Wrap your App component with PersistGate */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
