import React, { useState } from "react";
import { Input } from "../Input/Input";
function FormAddWorker({ onClickAddWorker }) {
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const handlerOnClick = () => {
    onClickAddWorker({
      nombre: nombre,
      correo: correo
    });
  };
  return (
    <div className="form">
      <p className="text_form">Nombre del colaborador</p>
      <Input
        type="text"
        className="form_input"
        placeholder="Ingresa el nombre del colaborador"
        onChangeInput={(e) => setNombre(e.target.value)}
      />
      <p className="text_form">Correo del colaborador</p>
      <Input
        type="text"
        className="form_input"
        placeholder="Ingresa correo del colaborador"
        onChangeInput={(e) => setCorreo(e.target.value)}
      />
      <button onClick={handlerOnClick}>Agregar colaborador</button>
    </div>
  );
}

export default FormAddWorker;
