function comprar() {
    let tipo_ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida");
        return;
    }

    if (!tipo_ingresso || tipo_ingresso.trim() === "") {
        alert("Selecione um tipo de ingresso válido");
        return;
    }

    verifica_tipo_ingresso(tipo_ingresso, quantidade);
}

function verifica_tipo_ingresso(tipo_ingresso, quantidade) {
    switch (tipo_ingresso) {
        case 'pista':
            compra_ingresso(tipo_ingresso, quantidade)
            break;

        case 'inferior':
            compra_ingresso(tipo_ingresso, quantidade)
            break;

        case 'superior':
            compra_ingresso(tipo_ingresso, quantidade)
            break;

        default:
            alert("Sua seleção não condiz com nenhum tipo de ingresso!");
            break;
    }
}

function compra_ingresso(tipo_ingresso, quantidade) {
    let qtd_ingresso = document.getElementById(`qtd-${tipo_ingresso}`).textContent;
    if (parseInt(qtd_ingresso) < parseInt(quantidade)) {
        alert("Não temos ingressos suficientes!");
        return;
    } else {
        qtd_ingresso -= quantidade;
        document.getElementById(`qtd-${tipo_ingresso}`).textContent = qtd_ingresso;
        alert("Compra realizada com sucesso!");
    }
} 