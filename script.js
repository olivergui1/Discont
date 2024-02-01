function calcularDesconto() {
   const valorOriginalElement = document.getElementById("valorOriginal");
   const porcentagemDescontoElement = document.getElementById("porcentagemDesconto");
   const resultadoDescontoElement = document.getElementById("resultadoDesconto");


   const valorOriginal = parseFloat(valorOriginalElement.value);
   const porcentagemDesconto = parseFloat(porcentagemDescontoElement.innerText);

   if (valorOriginal < 30) {
      resultadoDescontoElement.innerText = "Item sem desconto, apenas acima de 30R$";
      return;
   }
 

   if (isNaN(valorOriginal) || isNaN(porcentagemDesconto)) {
      resultadoDescontoElement.innerText = "Valores inválidos.";
      return;

   }
   const desconto = (porcentagemDesconto / 100) * valorOriginal;
   const valorComDesconto = valorOriginal - desconto;

   resultadoDescontoElement.innerText = valorComDesconto.toFixed(2);
}






