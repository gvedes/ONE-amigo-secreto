# ONE-amigo-secreto 🎁
Primeiro Challenge do &lt;Hello, ONE!/>__ Desenvolvimento de uma aplicação em que o usuário adicione nomes de seus amigos ou familiares e em seguida, efetue um sorteio.
Bem-vindo à aplicação web de Amigo Secreto! Esta ferramenta foi desenvolvida para facilitar a organização da sua brincadeira de amigo secreto, permitindo o gerenciamento dos participantes e realizando o sorteio de forma aleatória e justa.

## Como Usar 🔄

1. Digite o nome de um participante no campo de texto
2. Clique em "Adicionar" ou pressione Enter para incluir o nome
3. Repita o processo para todos os participantes
4. Clique em "Sortear amigo" para realizar o sorteio

## Funcionalidades ✨

- Adição de participantes à lista do amigo secreto
- Sistema de validação que impede nomes duplicados
- Visualização em tempo real de todos os participantes
- Sorteio aleatório dos amigos secretos
- Interface limpa e responsiva
- Design acessível com atributos ARIA para leitores de tela

## Tecnologias Utilizadas 🛠️

O projeto foi desenvolvido utilizando tecnologias web modernas:

- HTML5 para estruturação do conteúdo
- CSS3 para estilização
- JavaScript puro para a lógica de programação
- Google Fonts (famílias Inter e Merriweather)

## Como Funciona

### Interface do Usuário

A aplicação apresenta uma interface intuitiva onde os usuários podem:

1. Digitar os nomes dos participantes em um campo de texto
2. Adicionar nomes à lista através do botão "Adicionar"
3. Visualizar todos os participantes adicionados em uma lista dinâmica
4. Realizar o sorteio clicando no botão "Sortear amigo"

### Funcionamento Técnico

O JavaScript implementa diversas funcionalidades importantes:

1. **Gerenciamento de Nomes**
   - Os nomes são armazenados em um array (`listaAmigos`)
   - Sistema de validação impede nomes duplicados
   - Mensagens de erro apropriadas para entradas vazias

2. **Atualização da Lista**
   - A lista de participantes é atualizada em tempo real
   - O DOM é gerenciado de forma eficiente para exibir os participantes atuais

3. **Sistema de Sorteio**
   - Utiliza `Math.random()` para garantir um sorteio justo
   - Resultados são exibidos instantaneamente na interface
