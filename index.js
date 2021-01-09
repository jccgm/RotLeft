
function rotLetf( d, arreglo){

    console.log(arreglo);
    const origin = document.getElementById('original')
     origin.innerText = arreglo;
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
        // document.write(arreglo);
     const final = document.getElementById('final')
     final.innerText = arreglo;
        
}
rotLetf(4,[1,2,3,4,5]);

