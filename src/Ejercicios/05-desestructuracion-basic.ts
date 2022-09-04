interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:String;
    detalle:Detalles;
}

interface Detalles{
    autor:String;
    anio:Number;
}

const reproductor :Reproductor={
    volumen :90,
    segundo:36,
    cancion:'mess',
    detalle:{
        autor:'ed Seeran',
        anio:2015
    }
}

const{volumen,segundo,cancion,detalle} = reproductor;
const {autor} =detalle;


//console.log('el columen actuales : ',reproductor.volumen);
//console.log('el segundo actuales : ',reproductor.segundo);
//console.log('la cancion actuales : ',reproductor.cancion);
//console.log('el autor es : ',reproductor.detalle.autor);

const dbz :string []=['goku','vegeta','trukns'];
const [p1,p2,p3]=dbz;

console.log('Personaje 1:',p1);
console.log('Personaje 2:',p2);
console.log('Personaje 3:',p3);