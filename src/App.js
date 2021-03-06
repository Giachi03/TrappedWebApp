import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pagine/page_home/home";
import {Impostazioni} from "./pagine/page_impostazioni/impostazioni";
import {ConfigPartita} from "./pagine/page_configPartita/configPartita";
import {Classifica} from "./pagine/page_classifica/classifica";
import {Gioco} from "./pagine/page_gioco/gioco";
import {Menu} from "./pagine/page_menu/menu";
import {Regole} from "./pagine/page_regole/regole";

const App = () => {
	return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/" element={<Home />}>
        </Route>
        <Route
          path="/impostazioni" element={<Impostazioni />}>
        </Route>
        <Route
          path="/confingpartita" element={<ConfigPartita />}>
        </Route>
        <Route
          path="/classifica" element={<Classifica />}>
        </Route>
        <Route
          path="/gioco" element={<Gioco />}>
        </Route>
        <Route
          path="/menu" element={<Menu />}>
        </Route>
        <Route
          path="/regole" element={<Regole />}>
        </Route>
      </Routes>
    </BrowserRouter>
	);
}

export default App;