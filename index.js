const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
      respostas: [
        "console.print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "both var and let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para adicionar um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "' Comentário",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'getElementById'?",
      respostas: [
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo ID",
        "Seleciona um elemento pelo nome da tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i <= 5; i++)",
        "for (var i = 0; i < 5; i++)",
        "for (var i = 0; i <= 5)",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "typeOf()",
        "typeof",
        "type()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      respostas: [
        "Adiciona um evento a um elemento HTML",
        "Remove um evento de um elemento HTML",
        "Altera o conteúdo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Como você pode concatenar duas strings em JavaScript?",
      respostas: [
        "merge()",
        "concat()",
        "join()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma função em JavaScript?",
      respostas: [
        "function: myFunction()",
        "function myFunction()",
        "myFunction: function()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  for(const item of perguntas) {
     const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta 
      dt.querySelector('input').setAttribute('nome', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizitem.querySelector('dl').appendChild(dt)
  
    }
  
    quizitem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizitem)
    
  }