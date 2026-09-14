const palindromes = function (texto) {
  const textoMinusculo = texto.toLowerCase();
  
  const permitidos = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  let textoLimpo = '';
  for (let i = 0; i < textoMinusculo.length; i++) {
    const caractere = textoMinusculo[i];
    if (permitidos.includes(caractere)) {
      textoLimpo += caractere;
    }
  }

  let esquerda = 0;
  let direita = textoLimpo.length - 1;

  while (esquerda < direita) {
    if (textoLimpo[esquerda] !== textoLimpo[direita]) {
      return false;
    }
    esquerda++;
    direita--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;