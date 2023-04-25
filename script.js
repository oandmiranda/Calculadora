function calcular(tipo, valor) {
    // bloco de 'ação'
    if (tipo === 'acao') {
      
        if (valor === 'c') {
            // limpar o visor 
            document.getElementById('resultado').value = null
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor  //concatena e atribui 
        }

        if (valor == '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            // Eval converte a string em uma operação aritmética, retornando o seu resultado
            document.getElementById('resultado').value = valor_campo
        }

    } else if (tipo === 'valor') {
       document.getElementById('resultado').value += valor 
    } 
}

