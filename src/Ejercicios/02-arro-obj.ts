

let habilidades : string[] = ['Bash','Counter','Healing'];

interface Personaje{
    nombre :string;
    hp:number;
    habilidades: string[];
    pueblonatal?: string;
}

const personaje: Personaje={
   nombre :'stride',
   hp:100,
   habilidades :['Bash','Counte','Healing']
}

personaje.pueblonatal  = 'pueblo paleta' ;

console.table(personaje);