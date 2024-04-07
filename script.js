function calculadorafinanceira(){
    let tipo_escolhido = tipo_cafe.value
    const qnt_sacas = Number(input_sacas.value)
    const preco_sacas = Number(input_preco.value)
    let dinheiro_atual= qnt_sacas * preco_sacas

    if(tipo_escolhido == 'arabico'){
        alert(dinheiro_atual / 0.43.toFixed(2))
    }else if(tipo_escolhido == 'robusto'){
        alert((dinheiro_atual / 0.46).toFixed(2))
    }
}