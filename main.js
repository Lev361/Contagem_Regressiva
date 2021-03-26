'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);


const atualizar = (tempo) => {
  const segundos = document.getElementById('segundos');
  const minutos = document.getElementById('minutos');
  
  const horas = document.getElementById('horas');

   const dias = document.getElementById('dias');


  
  const quantidadeDeSegundos = tempo % 60;
  
  const quantidadeDeMinutos = Math.floor((tempo % (60 * 60)) / 60);
  
  const quantidadeDeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
  
  const quantidadeDeDias = Math.floor(tempo / (60 * 60 * 24));





  segundos.textContent = formatarDigito(quantidadeDeSegundos);
  
  minutos.textContent = formatarDigito(quantidadeDeMinutos);
  
  horas.textContent = formatarDigito(quantidadeDeHoras);
  
  dias.textContent = formatarDigito(quantidadeDeDias);


}

const contagemRegressiva = (tempo) => {
  const pararContagem = () => clearInterval(id);
  const contar = () =>{
    if (tempo == 0){
      pararContagem();
    }
    atualizar (tempo);
    tempo--;
    
  }
 const id = setInterval(contar, 1000); 
 
}

const tempoRestante = () => {
  const dataEvento = new Date ('2021-09-13 00:00:00');
  const hoje = Date.now();
  return Math.floor((dataEvento - hoje) / 1000);
}
contagemRegressiva(tempoRestante());