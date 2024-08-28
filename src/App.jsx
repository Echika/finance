import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {SignIn, SignUp, Dashboard, Home} from './pages'
import DashboardLayout from "./components/layout";
import ContactUs from "./components/takecharge/contact";


const App = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>}/>
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
       
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transaction" element={<div>Transaction</div>}/>
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default App;
