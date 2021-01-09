
function rotLetf( d, arreglo){

    console.log(arreglo);
    if(arreglo instanceof Array){
        for(let i= 0 ;i<d; i++){
            let numero = arreglo[i];
            arreglo.push(numero)
        }
        for(let i= 0 ;i<d; i++){
            arreglo.shift();
        }
    }
        console.log(arreglo)
        // return arreglo;
}
rotLetf(4,[1,2,3,4,5]);

