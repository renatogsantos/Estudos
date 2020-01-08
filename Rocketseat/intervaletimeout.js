// interval and time out


function exibeAlgo(){
  console.log('ola');
}

setInterval(exibeAlgo, 2000)// set interval exibe várias vezes setTimeOut só exibe após o tempo acabar



function pares(x, y) {
  for(var i = x ; i <= y ; i++){
      if (i % 2 === 0) {
          console.log(i);
      }
  }
}
pares(32, 321);