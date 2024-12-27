function mostrarContagemRegressiva() {
    const contagemRegressivaElement = document.getElementById('contagemRegressiva');
    const dataAnoNovo = new Date(new Date().getFullYear() + 1, 0, 1); // Ajustar para o fuso horário se necessário
    const agora = new Date();
    let tempoRestante = dataAnoNovo - agora;

    const intervalo = setInterval(() => {
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        contagemRegressivaElement.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        tempoRestante -= 1000;

        if (tempoRestante < 0) {
            clearInterval(interval);
            contagemRegressivaElement.textContent = 'Feliz Ano Novo!';
        }
    }, 1000); // Atualiza a cada segundo
}