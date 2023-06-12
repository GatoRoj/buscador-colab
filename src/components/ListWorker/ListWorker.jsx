import React from "react";

const ListWorker = ({ lista }) => {
  return (
    <div className="lista">
      <h1>Lista de colaboradores</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((index) => (
            <tr key={index.id}>
              <td>{index.id}</td>
              <td>{index.nombre}</td>
              <td>{index.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWorker;
