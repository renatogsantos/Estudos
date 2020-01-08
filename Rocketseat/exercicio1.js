var end = {
  nome: "Renato G.",
  rua: "tamandaré",
  numero: 91,
  bairro: "liberdade",
  cidade: "São Paulo",
  uf: "SP"
};
function info(end){
  return 'O cliente '+ end.nome + ' mora em ' + end.cidade + ' / ' + end.uf + ', no bairro' + end.bairro + ', na rua ' + end.rua + ' com o número ' + end.numero;
};
console.log(info(end));