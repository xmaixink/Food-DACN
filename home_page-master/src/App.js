// src/App.js
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./css/App.css";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import ContactPage from "./pages/Contactpage/Contactpage";
import HomePage from "./pages/HomePage/HomePage";
import ListProduct from "./pages/ListProduct/ListProduct";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactpage" element={<ContactPage />} /> 
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/product/:productName" element={<ProductDetail />} />
        </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;