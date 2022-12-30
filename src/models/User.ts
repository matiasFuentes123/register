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
