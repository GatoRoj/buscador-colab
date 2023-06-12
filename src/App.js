import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import { lista } from "./Lista";
import React, { useState } from "react";
import ListWorker from "./components/ListWorker/ListWorker";
import FormAddWorker from "./components/FormAddWorker/FormAddWorker";

export default function App() {
  const [listaColab, setListaColab] = useState(lista);

  const handlerClickAdd = (e) => {
    setListaColab([...listaColab, { id: listaColab.length + 1, ...e }]);
    console.log(listaColab);
  };
  const handlerSearchNavbar = (listafilter) => {
    const newLista = listafilter.length === 0 ? lista : listafilter;
    setListaColab([...newLista]);
    console.log(listafilter);
  };
  return (
    <div className="App">
      <div className="navbar">
        <h2>Buscador de colaboradores</h2>
        <NavBar
          onChangeNavbar={(e) => handlerSearchNavbar(e)}
          lista={listaColab}
        />
      </div>
      <FormAddWorker onClickAddWorker={(e) => handlerClickAdd(e)} />
      <ListWorker lista={listaColab} />
    </div>
  );
}
