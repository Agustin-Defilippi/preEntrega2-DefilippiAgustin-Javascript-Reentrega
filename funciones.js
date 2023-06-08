
const eleccionZona = () =>{

    while ((paqueteViaje !=="norte") && (paqueteViaje !=="centro") && (paqueteViaje !=="sur")){
        paqueteViaje = prompt(`ingrese que el destino donde usted quiere viajar dentro del pais \n\n *Norte \n *Centro \n *Sur`).toLowerCase();
    }

    return paqueteViaje;
}

const recorridoZona= () =>{

    let salida1= "";
        
    zonaViaje.forEach(elemento =>{(salida1+=`Destino: ${elemento.destino}.\n Duracion: ${elemento.duracion}. \n Pasaje: ${elemento.boleto}. \n Hospedaje: ${elemento.hospedaje}. \n Precio :  $${elemento.precio}. \n Zona: ${elemento.zona}. \n\n`)});

    return salida1;
}

const destino = () =>{

    let destinoZonaViaje = "";

    while ((!isNaN(destinoZonaViaje)) || (destinoZonaViaje.trim()==="")){
    destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();
    }

    return destinoZonaViaje;

}

const recorridoDestino = () =>{

    let salida2="";

    for (const elemento in viajeResultado) {
        salida2+= elemento+" "+viajeResultado[elemento]+`\n`;
    }

    return salida2;
}

const formaDePago = (pago, valor) => {
    
    let totalValor =0;
  
    if (pago === "efectivo") {
      totalValor = valor * 0.8;
    } else if (pago === "cuotas") {
      totalValor = valor * 1.10;
    } else if (pago === "ahora 12") {
      totalValor = valor * 1.20;
    }else{
        alert(null)
    }
  
    return totalValor;
}
