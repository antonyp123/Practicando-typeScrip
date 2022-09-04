

function sumar(a: number, b: number): number {
    return a+b;
}

const sumarFlecha=(a: number,b: number) : number =>{
    return a+b;
}

function multiclicar(numero: number,otornumero?:number,base: number=2): number{
    return numero * base;
}

//const resultado=sumar(9,9);
//const resultado=multiclicar(10,0,10);
//console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp:() => void;
}

function curar(personaje:PersonajeLOR,curarX: number):void {

    personaje.pv += curarX;

    console.log(personaje);
}
const nuevoPeronaje:PersonajeLOR ={
    nombre :'Strider',
    pv:50,
    mostrarHp(){
        console.log('puntos de vida :',this.pv );
    }
}
curar (nuevoPeronaje ,20);

nuevoPeronaje.mostrarHp();