
interface SuperHeroe{
    nombre: string;
    edad: number;
    direction:Direction,
    mostrarDireccion:() => string;
}

interface Direction{
    calle:string;
    pais:string;
    ciudad:string;
}


const superHeroe={
    nombre : 'Spiderman',
    edad:30,
    direction:{
        calle:'mains st',
        pais:'Usa',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre +', '+this.direction.ciudad + ' ,'+this.direction.pais;
    }
}

const direction = superHeroe.mostrarDireccion();
console.log(direction);