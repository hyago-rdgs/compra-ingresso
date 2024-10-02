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

    compra_ingressos(tipo_ingresso, quantidade)
}

function compra_ingressos(tipo_ingresso, quantidade) {
    switch (tipo_ingresso) {
        case 'pista':
            let qtd_pista = document.getElementById("qtd-pista").textContent;
            if (parseInt(qtd_pista) < parseInt(quantidade)) {
                alert("Não temos ingressos suficientes!");
                return;
            } else {
                qtd_pista -= quantidade;
                document.getElementById("qtd-pista").textContent = qtd_pista;
            }
            break;

        case 'inferior':
            let qtd_inferior = document.getElementById("qtd-inferior").textContent;
            if (parseInt(qtd_inferior) < parseInt(quantidade)) {
                alert("Não temos ingressos suficientes!");
                return;
            } else {
                qtd_inferior -= quantidade;
                document.getElementById("qtd-inferior").textContent = qtd_inferior;
            }
            break;

        case 'superior':
            let qtd_superior = document.getElementById("qtd-superior").textContent;
            if (parseInt(qtd_superior) < parseInt(quantidade)) {
                alert("Não temos ingressos suficientes!");
                return;
            } else {
                qtd_superior -= quantidade;
                document.getElementById("qtd-superior").textContent = qtd_superior;
            }
            break;

        default:
            alert("Sua seleção não condiz com nenhum tipo de ingresso!");
            break;
    }
}