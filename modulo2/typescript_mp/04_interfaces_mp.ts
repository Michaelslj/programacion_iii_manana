interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
    activo: boolean;
    edad: number;
}

const usuarios: Usuario[] = [
    { id: 1, nombre: 'Jose Garcia Marquez', correo: 'jose@gmail.com', activo: true, edad: 25 },
    { id: 2, nombre: 'Pablo Escobar', activo: false, edad: 17 },
    { id: 3, nombre: 'Maria Lopez', correo: 'maria@gmail.com', activo: true, edad: 30 }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log('Usuario:', usuarios[i].nombre);
    console.log('ID:', usuarios[i].id);
    console.log('Correo:', usuarios[i].correo);
    console.log('Activo:', usuarios[i].activo ? 'Sí' : 'No');
    console.log('Edad:', usuarios[i].edad);
    console.log('Estado de usuario:', usuarios[i].edad >= 18 && usuarios[i].activo ? 'Activo y mayor de edad' : 'Inactivo o menor de edad');
    console.log('------------------------------');
}
