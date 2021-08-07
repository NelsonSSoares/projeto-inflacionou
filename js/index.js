function verificar(){
  let  produto = document.getElementById('produto').value;
  let  anterior = document.getElementById('anterior').value;
  let  atual = document.getElementById('atual').value;
  let  diferenca = 0;

    if( produto == '' || anterior == '' || atual == ''){
        document.getElementById('result').style.color = 'yellow'
        document.getElementById('result').innerHTML = 'Você pecisa preencher todos os campos corretamente!!'
    }

    anterior = parseFloat(anterior);
    atual = parseFloat(atual);

    if(anterior < 0 || atual < 0){
        document.getElementById('result').style.color = 'yellow'
        document.getElementById('result').innerHTML = 'Valor Inválido!!!'
    }

    switch(produto){
        case '1':
            produto = 'Tomate';
            break;
        case '2':
            produto = 'Laranja';
            break;
        case '3':
            produto = 'Abacaxi';
            break;
        case '4':
            produto = 'Limão';
            break;
    }

    if(atual == anterior){
        document.getElementById('result').style.color = 'lightgray';
        document.getElementById('result').innerHTML = `O produto ${produto} não teve alterações`;
    }else if(atual < anterior){
        diferenca = anterior - atual;
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').innerHTML = `O produto ${produto} está R$${diferenca} ↓ mais barato!`;
    }else if(atual > anterior){
        diferenca = atual - anterior;
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = `O produto ${produto} está R$${diferenca} ↑ mais caro!`;
    }
}

