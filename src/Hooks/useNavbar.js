import { useState } from "react";

export const useNavbar = () => {
  const NAVIGATION = [
    { url: "/Productos", name: "Productos" },
    { url: "/Usuarios", name: "Usuarios" },
    { url: "/Ventas", name: "Ventas" },
    {url: "/InicioSesion", name:"Inicia sesión"}
  ];

  const [abrir, setabrir] = useState(false);

  return { NAVIGATION, abrir, setabrir };
};
