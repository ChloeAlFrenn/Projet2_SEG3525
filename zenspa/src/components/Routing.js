import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accueil from "../pages/Accueil";
import MassagesSoins from "../pages/MassagesSoins";
import Reservation from "../pages/Reservation";
import BienEtre from "../pages/BienEtre";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/MassagesSoins" element={<MassagesSoins />} />
      <Route path="/Reservation" element={<Reservation/>}/>
      <Route path="/BienEtre" element={<BienEtre/>}/>
    </Routes>
  );
}

export default Routing;
