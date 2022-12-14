// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + umDia); // 01/01/1970 Timestamp unix época unix -> marco zero
// console.log(data.toString());  //Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília) -3 horas do horario de brasilia

// const data = new Date(2019, 3, 20, 15, 14, 27, 999); // a, m, d, h, M, s, ms
// const data = new Date('2019-04-20 20:15:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()); // Mes começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('MS', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - Domingo, 6- Sabádo
// console.log(data.toString());

//Função para formtar uma data

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth()) + 1;
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `A data de hoje é ${dia}/${mes}/${ano} e horario é ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
