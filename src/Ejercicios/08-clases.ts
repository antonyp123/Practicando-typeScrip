
class PersonaNormal{
  //nombre :string;
  //direccion:string;

  constructor(
    public nombre :string,
    public direccion :string){

  }
}

class Heroe extends PersonaNormal{
     //alterEgo:String;
    // edad:Number;
   //  nombreReal:Number;

     constructor(
      public alterEgo :string,
      public edad?:number,
      public nombreReal?:string
      ){
       super(nombreReal,'new york,USA');
     }



    // impromirNombre(){
    //    return this.alterEgo +' '+ this.nombreReal;
    // }
}
//interface Personaje2{
//    alterEgo?:String;
 //    edad?:Number;
  //   nombreReal?:Number;
//}

const ironman = new Heroe('Iroman',45,'tpny');
//const spiderman : Personaje2 = {}

console.log(ironman);
