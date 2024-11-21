async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/Flavialemes/ciencia-de-dados/refs/heads/main/base-de-dados/educacao-dados-globais.json'

    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar',
      marker: {
        color: 'grey'
      }
    }
  ]
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)
  
  }
  
  quantidadeUsuarios()
  