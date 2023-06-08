const viajes = [{destino:"salta",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Andina Hotel",precio:82500,categoria:"oferta",zona:"norte"}
,{destino:"formosa",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Solar del lago cabañas",precio:68900,categoria:"oferta",zona:"norte"}
,{destino:"misiones",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"El salto del tigre",precio:112700,categoria:"alta",zona:"norte"},
{destino:"san luis",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"La chaqueñita cabañas",precio:52000,categoria:"oferta",zona:"centro"},
{destino:"buenos aires",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"Hotel Monaco",precio:39500,categoria:"baja",zona:"centro"},
{destino:"san juan",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"Temu Hoteles",precio:131700,categoria:"alta",zona:"centro"},
{destino:"santa cruz",duracion:"4 dias",boleto:"ida y vuelta",hospedaje:"Cabañas el Arriero",precio:100000,categoria:"alta",zona:"sur"},
{destino:"cafayate",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Suites la Ferrere",precio:185300,categoria:"oferta",zona:"sur"}];

let paqueteViaje= "";

let zonaElegida = eleccionZona();

const zonaViaje = viajes.filter(elementos => elementos.zona === zonaElegida);

console.log(zonaViaje);


alert(`Paquetes de viaje disponibles en zona (${paqueteViaje}) del pais. \n\n ${recorridoZona()}`);



let destinoElegido = destino();

const viajeResultado = zonaViaje.find(elemento => elemento.destino === destinoElegido);

console.log(viajeResultado);


alert(`Felicitaciones usted ha elegido con exito (${viajeResultado.destino}) como paquete de viaje!!! \n\n ${recorridoDestino()}`)

class pasajeCliente{

    constructor(nombre,apellido,dni,provincia,localidad,codigo,nacionalidad,fecha){
        this.nombrePasajero = nombre;
        this.apellidoPasajero = apellido;
        this.dni = dni;
        this.provincia = provincia;
        this.localidad = localidad;
        this.codigoPostal = codigo;
        this.nacionalidad = nacionalidad;
        this.fechaIngresada= fecha;
    }

    mayorEdad(numero){
        if(this.dni<numero){
            alert(`Usted es mayor de edad. \n Debera presentar fotocopia a color de su DNI numero ${this.dni} de ambos lados y su identificacion en forma de física en la agencia.`);
            
        }else if(this.dni>numero){
            alert("Usted es menor de edad,deberá presentar autorizacion de padre, madre y/o tutor, presentarse en la agencia de turismo");

        }else{
            alert("ingreso un numero de dni incorrecto.")
        }
    }

    nacionalidadPasajero(){
      if(this.nacionalidad === "argentino"){
        alert("Usted es argentino, ingrese a MI ARGENTINA y descargue el certificado de vacunacion contra COVID-19.");
      }else if(this.nacionalidad !== "argentino"){
        alert("Usted es extranjero, por lo tanto debera presentar carnet de vacunacion contra COVID-19, y sera excluyente el aplicado de tres dosis correspondientes.");
      }else{
        alert("ingreso un dato incorrecto.")
      }
    }
}

const usuario = new pasajeCliente(prompt("Ingrese nombre completo.").toLocaleLowerCase(),prompt("Ingrese apellido.").toLocaleLowerCase(),parseInt(prompt("Ingrese su DNI.")),prompt("Ingrese provincia residente.").toLocaleLowerCase(),prompt("Ingrese localidad residente.").toLocaleLowerCase(),prompt("Ingrese codigo postal.").toLocaleLowerCase(),prompt("Ingrese nacionalidad.").toLocaleLowerCase(),prompt("Ingrese fecha actual en formato aa/bb/cccc").toLocaleLowerCase());

usuario.mayorEdad(43000000)
usuario.nacionalidadPasajero();


let total;
while((total !=="efectivo") && (total !=="cuotas") && (total !=="ahora 12")){

    total = prompt("ingrese forma de pago para conocer el monto final del paquete contratado \n\n *(Inserte Efectivo, si su pago es en Efectivo).\n *(Inserte cuotas si su pago es en 3 o 6 pagos). \n *(inserte  Ahora 12 si su pago es en Ahora 12).\n\n Efectivo = precio definido. \n 3 o 6 pagos = +10% recargo. \n Ahora 12 = +20% recargo.").toLocaleLowerCase();
}

let salida4= `Usted ingreso (${total}) como forma de pago. \n y debera a bonar la totalidad de $${formaDePago(total,viajeResultado.precio).toFixed(2)}.`;

alert(salida4);
alert(`Felicitaciones (${usuario.nombrePasajero} ${usuario.apellidoPasajero}), su pago se ha adquirido con éxito. Muchas gracias por elegirnos, a continuacion le llegara su pasaporte!`);

const viajeUsuario = [];
const datosUsuario = [];

viajeUsuario.push(viajeResultado);
datosUsuario.push(usuario);

salidaFinal= `${viajeSeleccionado()} \n ${datosUsuarViaje()}`

alert(`(PASAPORTE DEFILIPPI SPACETOUR) \n\n ${salidaFinal} \n`);






































