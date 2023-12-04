import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndividualIntervalsExample from "./components/Carousel.tsx";
import Detail from "./components/Deatail.tsx";
import LoginForm from "./components/LoginForm.tsx";
import ForgotPassword from "./components/ForgotPassword.tsx";
import Register from "./components/Register.tsx";
ReactDOM.createRoot(document.getElementById("wrapper")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<App />} />
            <Route
              path="product"
              element={<IndividualIntervalsExample />}
            ></Route>
            {/* <Route path="country-filter" element={<CountryFilter />}></Route> */}
            <Route path="product/:productId" element={<Detail />} />
            {/* <Route path="/new-product" element={<NewProduct />}></Route> */}
          </Route>
          {/* <Route path="/demo" element={<DemoTailwind />}></Route> */}
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer position="bottom-right" hideProgressBar theme="colored" /> */}
    </Provider>
  </React.StrictMode>
);
