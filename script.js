const encriptador_entrada = document.querySelector(".encriptador_entrada");
const encriptador_salida = document.querySelector(".encriptador_salida");

//const imagen_muneco = document.getElementsByClassName(".muneco");


function botonEncriptar(){
    const textoAEncriptar = encriptar(encriptador_entrada.value);
    encriptador_salida.value = textoAEncriptar;
    encriptador_entrada.value = "";
    encriptador_salida.style.backgroundImage = "none";
}

function encriptar(textoencriptado){

    var regex = /^[a-zA-Z0-9\s]*$/;

    console.log(textoencriptado);

    if( textoencriptado.trim().length === 0){

        window.alert("No se encontró ningun mensaje, por favor ingresa de nuevo el texto.")

    } else if (regex.test(textoencriptado)  ) {

        let codigosEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        textoencriptado = textoencriptado.toLowerCase();

        for(let i = 0; i < codigosEncriptacion.length; i++){

            if (textoencriptado.includes(codigosEncriptacion[i][0])) {

                textoencriptado = textoencriptado.replaceAll(codigosEncriptacion[i][0], codigosEncriptacion[i][1]);       
            }
        }
        
        return textoencriptado;
        
    } else {
        window.alert("Solo letras minusculas, sin acentos y sin caracteres especiales. por favor ingresa de nuevo el texto.");
    }
}
/*

*/

function botonDesencriptar(){
    const textoADesencriptar = desencriptar(encriptador_entrada.value);
    encriptador_salida.value = textoADesencriptar;
    encriptador_entrada.value = "";
 
}

function desencriptar(textodesencriptado){

    var regex = /^[a-zA-Z0-9\s]*$/;

    if (textodesencriptado.trim().length === 0) {

        window.alert("No se encontró ningun mensaje, por favor ingresa de nuevo el texto.")
        
    } else if (regex.test(textodesencriptado)) {

        let codigosEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textodesencriptado = textodesencriptado.toLowerCase();

    for(let i = 0; i < codigosEncriptacion.length; i++){

        if (textodesencriptado.includes(codigosEncriptacion[i][1])) {

            textodesencriptado = textodesencriptado.replaceAll(codigosEncriptacion[i][1], codigosEncriptacion[i][0]);
            
        }
    }

    return textodesencriptado;
        
    } else {

        window.alert("Solo letras minusculas, sin acentos y sin caracteres especiales. por favor ingresa de nuevo el texto.");

    }

}

function botonCopiar(){

    encriptador_salida.select();
    document.execCommand("copy");
}