import Input from "../Input/Input";

const NavBar = ({ onChangeNavbar, lista }) => {
  const handlerSearch = (e) => {
    const search = e.target.value;
    const newLista = lista.filter(
      (u) =>
        u.nombre.includes(search) ||
        u.id.toString().includes(search) ||
        u.correo.includes(search)
    );

    onChangeNavbar(newLista);
  };
  return (
    <Input
      placeholder="Busca un colaborador"
      onChangeInput={(e) => {
        handlerSearch(e);
      }}
    />
  );
};

export default NavBar;
