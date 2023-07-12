// import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const App = () => {
  return (
<div className="App">
<Navbar />
<Outlet/>
</div>
  );

  }
  export default App