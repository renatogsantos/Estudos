// if else

function returnSex(sexo){
  if( sexo === 'm'){
    return 'Masculino'
  } else if(sexo === 'f') {
    return 'Feminino'
  } else {
    return 'Outro'
  }
}

var result = returnSex('f')

console.log(result)

// switch case

function retornaSabor(sabor){
  switch (sabor){
    case 'morango':
      return 'uau que delicia'
    case 'chocolate':
      return 'que foda!'
    case 'uva':
      return 'que bosta!'
    default:
      return 'Faça sua escolha'
  }
}

var valor = retornaSabor('morango')

console.log(valor);


function saborez(gosto){
  if (gosto === ''){
    return 'escolha seu gosto'
  } else if(gosto === 'uva'){
    return 'uva zuada'
  } else {
    return 'padrão'
  }
}

let resultGosto = saborez('uva')

console.log(resultGosto);

function fofa(fofinha){
  switch (fofinha){
    case 'f':
      return 'fofa1'
    case 'm':
      return 'fofa pa caralho'
    case 'z':
      return 'nao tao fofa'
    default :
      return 'padrãozão'
  }
}
 let quantaFofura = fofa('z')// no caso de string, use a porra da string

 console.log(quantaFofura);