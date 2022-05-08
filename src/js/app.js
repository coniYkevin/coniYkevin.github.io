window.onload = () =>{
    let fechaFinal = new Date("Aug 5, 2022 19:30:00").getTime();

    let tiempo = setInterval(()=>{
        let ahora = new Date().getTime();
        let restante = fechaFinal - ahora;

        let dias = Math.floor(restante / (1000 * 60 * 60 * 24));
        let horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((restante % (1000 * 60)) / 1000);

        let divdias = document.getElementById("dias");
        let divhoras = document.getElementById("horas");
        let divminutos = document.getElementById("minutos");
        let divsegundos = document.getElementById("segundos");

        divdias.textContent = dias;
        divhoras.textContent = horas;
        divminutos.textContent = minutos;
        divsegundos.textContent = segundos;
    }, 1000);
    
}
