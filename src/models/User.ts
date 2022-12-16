export type Person = {
  Nombre: string;
  Apellido?: string;
  Edad: number;
};

export type User = {
  Direccion: {
    Calle: string;
    Numero: number;
  };
  Estado: "Activo" | "Inactivo";
  // Contactos: string[];
} & Person;

let usuario: User = {
  Nombre: "Carlos",
  Edad: 27,
  Apellido: "Mondaca",
  Direccion: {
    Calle: "Traslaviña",
    Numero: 235,
  },

  Estado: "Activo"
};

usuario.Apellido;