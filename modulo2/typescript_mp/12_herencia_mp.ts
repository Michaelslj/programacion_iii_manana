import { Vuelo, VueloEspecial } from "./11_herencia_mp"; 

const miVuelo = new Vuelo("Quito", "Guayaquil"); 
console.log(miVuelo.origen); 
console.log(miVuelo.destino); 
miVuelo.moverse(); 

const miVueloEspecial = new VueloEspecial("Quito", "Galápagos"); 
console.log(miVueloEspecial.origen); 
console.log(miVueloEspecial.destino); 
miVueloEspecial.moverse(); 
