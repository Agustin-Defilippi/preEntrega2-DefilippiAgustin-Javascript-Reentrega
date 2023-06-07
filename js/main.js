const viajes = [{destino:`salta`,duracion:`5 dias`,boleto:`ida y vuelta`,hospedaje:`Andina Hotel`,precio:82500,categoria:`oferta`,zona:`norte`}
,{destino:`formosa`,duracion:`5 dias`,boleto:`ida y vuelta`,hospedaje:`Solar del lago cabañas`,precio:68900,categoria:`oferta`,zona:`norte`}
,{destino:`misiones`,duracion:`7 dias`,boleto:`ida y vuelta`,hospedaje:`El salto del tigre`,precio:112700,categoria:`alta`,zona:`norte`},
{destino:`san luis`,duracion:`3 dias`,boleto:`ida y vuelta`,hospedaje:`La chaqueñita cabañas`,precio:52000,categoria:`oferta`,zona:`centro`},
{destino:`buenos aires`,duracion:`3 dias`,boleto:`ida y vuelta`,hospedaje:`Hotel Monaco`,precio:39500,categoria:`baja`,zona:`centro`},
{destino:`san juan`,duracion:`7 dias`,boleto:`ida y vuelta`,hospedaje:`Temu Hoteles`,precio:131700,categoria:`alta`,zona:`centro`},
{destino:`santa cruz`,duracion:`4 dias`,boleto:`ida y vuelta`,hospedaje:`Cabañas el Arriero`,precio:100000,categoria:`alta`,zona:`sur`},
{destino:`cafayate`,duracion:`5 dias`,boleto:`ida y vuelta`,hospedaje:`Suites la Ferrere`,precio:185300,categoria:`oferta`,zona:`sur`}];

let paqueteViaje= "";

const eleccionZona = () =>{
    
    while ((paqueteViaje !=="norte") && (paqueteViaje !=="centro") && (paqueteViaje !=="sur")){
        paqueteViaje = prompt(`ingrese que el destino donde usted quiere viajar dentro del pais \n\n *Norte \n *Centro \n *Sur`).toLowerCase();
    }

    return paqueteViaje;
}

let zonaElegida = eleccionZona();

const zonaViaje = viajes.filter(elementos => elementos.zona === zonaElegida);

console.log(zonaViaje);


const recorridoZona= () =>{
    let salida1= "";
        
    zonaViaje.forEach(elemento =>{(salida1+=`Destino: ${elemento.destino}.\n Duracion: ${elemento.duracion}. \n Pasaje: ${elemento.boleto}. \n Hospedaje: ${elemento.hospedaje}. \n Precio :  $${elemento.precio}. \n Zona: ${elemento.zona}. \n\n`)});

    return salida1;
}

alert(`Paquetes de viaje disponibles en zona (${paqueteViaje}) del pais. \n\n ${recorridoZona()}`)


const destino = () =>{
    let destinoZonaViaje = "";

    while ((!isNaN(destinoZonaViaje)) || (destinoZonaViaje.trim()==="")){
    destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();
    }

    return destinoZonaViaje;

}

let destinoElegido = destino();

const viajeResultado = zonaViaje.find(elemento => elemento.destino === destinoElegido);

console.log(viajeResultado);


const recorridoDestino = () =>{
    let salida2="";

    for (const elemento in viajeResultado) {
        salida2+= elemento+" "+viajeResultado[elemento]+`\n`;
    }

    return salida2;
}

alert(`Felicitaciones usted ha elegido con exito (${viajeResultado.destino}) como paquete de viaje!!! \n\n ${recorridoDestino()}`)

class pasajeCliente{

    constructor(nombre,apellido,provincia,localidad,nacionalidad,codigo,fecha){
        this.nombrePasajero = nombre;
        this.apellidoPasajero = apellido;
        this.provincia = provincia;
        this.localidad = localidad;
        this.codigoPostal = codigo;
        this.nacionalidad = nacionalidad;
        this.fechaIngresada= fecha;
        
    }
}

const usuario = new pasajeCliente(prompt("Ingrese nombre completo.").toLocaleLowerCase(),prompt("Ingrese apellido.").toLocaleLowerCase(),prompt("Ingrese provincia residente.").toLocaleLowerCase(),prompt("Ingrese localidad residente.").toLocaleLowerCase(),prompt("Ingrese codigo postal.").toLocaleLowerCase(),prompt("Ingrese nacionalidad.").toLocaleLowerCase(),prompt("Ingrese fecha actual en formato aa/bb/cccc").toLocaleLowerCase());

console.log(usuario);

const recorridoDatosUsuario = () =>{
    let salida3= "";

    for (const datos in usuario) {
        salida3+= datos+":"+" "+usuario[datos]+".\n";
    }

    return salida3;
}

let datosUsuario = recorridoDatosUsuario();

alert(`Datos Pasajero ${usuario.nombrePasajero} ${usuario.apellidoPasajero}.\n
${datosUsuario}\n`);





