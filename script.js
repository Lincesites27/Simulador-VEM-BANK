const valorTxt = document.querySelector("#valorTxt");
const valorInput = document.querySelector("#valorInput");

const valorInputMes = document.querySelector("#valorInputMes");
const valorEntradaMes = document.querySelector("#valorEntradaMes");
const valorEntradaMensalidade = document.querySelector("#valorEntradaMensalidade");

const taxaDoze = 1.79;
const taxaVinteQuatro = 1.88;
const taxaTrintaSeis = 1.92;
const taxaQuarentaOito = 1.97;
const taxaSessenta = 2;
const taxaSetenta = 2.02;
const taxaOitenta = 2.02;


const mesDoze = 12;
const mesVinte = 24;
const mesTrinta = 36;
const mesQuarenta = 48;
const mesSessenta = 60;
const mesSetenta = 72;
const mesOitenta = 84;




valorInput.oninput =(()=>{
    let valueInput = Number(valorInput.value);
    let valueInputMes = Number(valorInputMes.value);
    valorTxt.innerHTML = `<h4 id="valorTxt">R$${valueInput.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h4>`;
    valorEntradaMensalidade.innerHTML = `<h2 id="valorEntradaMensalidade">R$${valueInput.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>`;

});

valorInputMes.oninput =(()=>{
    const valorTxtMes = document.querySelector("#valorTxtMes");
    let valueInputMes = Number(valorInputMes.value);
    valorTxtMes.innerHTML = `<h4 id="valorTxtMes">${valueInputMes} <span>Meses</span></h4>`;
    valorEntradaMes.innerHTML = `<h3 id="valorEntradaMes">${valueInputMes}x</h3>`;
});
