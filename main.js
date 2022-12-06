


function executar(event) {
    event.preventDefault();

    const valorComissaoInput = document.getElementById('valorComissao')
    const valorComissaoEcommerceInput = document.getElementsByClassName('valorComissaoCss')
    const valorComissaoRepresentanteInput = document.getElementById('valorComissaoRepresentante')
    const valorPremiacaoInput = document.getElementById('premiacao')
    const valorBrutoPagamentoInput = document.getElementById('valorBrutoPagamento')
    const valorDiasInput = document.getElementById('diasUteis')
    const valorDomingosInput = document.getElementById('domingosFeriados')
    const liquidoInput = document.getElementById('total')

    const valorComissao = parseFloat(valorComissaoInput.value)
    const valorComissaoEcommerce = parseFloat(valorComissaoEcommerceInput[0].value)
    const valorComissaoRepresentate = parseFloat(valorComissaoRepresentanteInput.value)
    const valorPremiacao = parseFloat(valorPremiacaoInput.value)
    const valorBrutoPagamento = parseFloat(valorBrutoPagamentoInput.value)
    const valorDias = parseFloat(valorDiasInput.value)
    const valorDomingos = parseFloat(valorDomingosInput.value)


    console.log('valor da comissao :', valorComissao)
    console.log('valor da comissao ecommerce :', valorComissaoEcommerce)
    console.log('valor da comissao representante :', valorComissaoRepresentate)
    console.log('valor da premiacao :', valorPremiacao)
    console.log('valor bruto pagamento :', valorBrutoPagamento)
    console.log('quantidade de dias :', valorDias)
    console.log('quantidade de domingos :', valorDomingos)

    const valorTotalLiquido = totalLiquido(valorBrutoPagamento, valorComissao, valorComissaoEcommerce, valorComissaoRepresentate, valorPremiacao, valorDias, valorDomingos)
    console.log('total liquido pag:', valorTotalLiquido)

    liquidoInput.value = valorTotalLiquido

}


function totalComissao(comissao, comissaoEcommerce, comissaoRepresentante, premiacao) {

    const totalComissao = comissao + comissaoEcommerce + comissaoRepresentante + premiacao
    return totalComissao
}

function totalDsr(comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) {

    const totalDsr = (totalComissao(comissao, comissaoEcommerce, comissaoRepresentante, premiacao) / dias) * domingo
    return totalDsr

}

function totalBruto(pagamentoBruto, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) {
    const totalBruto = totalComissao(comissao, comissaoEcommerce, comissaoRepresentante, premiacao) + totalDsr(comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) + pagamentoBruto

    return totalBruto
}

function calculoInss(pagamentoBruto, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) {
    const totalB = totalBruto(pagamentoBruto, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo)

    let valorInss = 0

    if (totalB > 1212.00 && totalB < 2427.34) {
        valorInss = totalB * 0.075

    } else if (totalB > 2427.35 && totalB < 3641.02) {
        valorInss = totalB * 0.09

    } else if (totalB > 3641.03 && totalB < 7084.21) {
        valorInss = totalB * 0.12

    } else if (totalB > 7084.22) {
        valorInss = totalB * 0.14
    }

    return valorInss
}

function calculoIr(pagamentoBruto, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) {
    const totalB = totalBruto(pagamentoBruto, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo)

    let valorIr = 0

    if (totalB > 2826.66 && totalB < 3751.05) {
        valorIr = totalB * 0.15

    } else if (totalB > 3751.06 && totalB < 4664.68) {
        valorIr = totalB * 0.225

    } else if (totalB > 4664.69) {
        valorIr = totalB * 0.275
    }

    return valorIr
}

function totalLiquido(valorBrutoPagamento, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) {

    const totalLiquido = totalBruto(valorBrutoPagamento, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) - calculoInss(valorBrutoPagamento, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo) - calculoIr(valorBrutoPagamento, comissao, comissaoEcommerce, comissaoRepresentante, premiacao, dias, domingo)

    const xTotalLiquido = totalLiquido.toFixed(2)
    return xTotalLiquido
}

function limpar() {
    const valorComissaoInput = document.getElementById('valorComissao')
    valorComissaoInput.value = ''
    const valorComissaoEcommerceInput = document.getElementsByClassName('valorComissaoCss')
    valorComissaoEcommerceInput[0].value = ''
    const valorComissaoRepresentanteInput = document.getElementById('valorComissaoRepresentante')
    valorComissaoRepresentanteInput.value = ''
    const valorPremiacaoInput = document.getElementById('premiacao')
    valorPremiacaoInput.value = ''
    const valorBrutoPagamentoInput = document.getElementById('valorBrutoPagamento')
    valorBrutoPagamentoInput.value = ''
    const valorDiasInput = document.getElementById('diasUteis')
    valorDiasInput.value = ''
    const valorDomingosInput = document.getElementById('domingosFeriados')
    valorDomingosInput.value = ''
    const liquidoInput = document.getElementById('total')
    liquidoInput.value = ''
}
