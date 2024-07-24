const monto = document.querySelector("#amount");
const cuotas = document.querySelector("#fees");
const montoFinal = document.querySelector("#finalAmount");
const cuotaFinal = document.querySelector("#finalFees");
const intereses = document.querySelector("#interests");
const totalADevolver = document.querySelector("#totalAmount");
const destino = document.querySelector("#destino");
const montoViaje = document.querySelector("#montoViaje");


const formulario = document.querySelector("#form");
const tasa = 0.01;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const montoPrestamo = monto.value;
    const numeroCuotas = cuotas.value;

    obtenerCuotasPrestamo(montoPrestamo,numeroCuotas);
    indicarDestino(destino);
    /* console.log(monto.value);
    console.log(cuotas.value); */
});

const obtenerCuotasPrestamo = (monto, cuota) => {
    const cuotaPrestamo = tasa*monto / (1- (1 + tasa)** - cuota);
    obtenerTotal(cuotaPrestamo,cuota);
};

const obtenerTotal = (cuotaPrestamo, cuota) => {
    const total = Math.ceil(cuotaPrestamo) * cuota;
    const prestamo ={
        monto: monto.value,
        cuotas: cuotas.value,
        intereses: total - monto.value,
        totalPrestamo: total
    };
    pintarPrestamo(prestamo);
};

const pintarPrestamo = (prestamo) => {
    montoFinal.textContent = `$ ${prestamo.monto}`;
    cuotaFinal.textContent = `${prestamo.cuotas}`;
    intereses.textContent = `$ ${prestamo.intereses}`;
    totalADevolver.textContent = `$ ${prestamo.totalPrestamo}`;
};

const indicarDestino = (destino) => {
    let precio = 0;
    switch (destino.value) {
        case "Andeluna":
            precio = 50000;
            break;
        case "Azul":
            precio = 25000;
            break;
        case "Catena Zapata":
            precio = 35000;
            break;
        case "Todos":
            precio = 100000;
            break;
        default:
            precio = 0;
            cantidad = 0;
    }
    montoViaje.textContent = `$ ${precio}`;
};

/* const pintarViaje = (precio) => {
    montoViaje.textContent = `$ ${precio}`;
    console.log(precio)
}; */