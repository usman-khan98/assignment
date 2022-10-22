import React, { useState } from "react";
import AddUser from "./pages/addUser/Add";
import ViewUser from "./pages/userView/View";
import "antd/dist/antd.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout login={true} setLogin={true} />}>
            <Route path="viewUsers" element={<ViewUser />} />
            <Route path="addUsers" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
