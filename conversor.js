document.getElementById('currency-form').addEventListener('submit', function(event){

    //obter valores de entrada do formulário
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    //definir taxa de câmbio fixa com utilização de objeto
    const exchangeRates = {
        USD: { EUR: 0.93, BRL: 5.71 },
        BRL: { EUR: 0.16, USD: 0.18 },
        EUR: { BRL: 6.16, USD: 1.08 }
    };


});