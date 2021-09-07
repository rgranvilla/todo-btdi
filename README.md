<h3 align="center">
<br>
🚧 Avaliação React em andamento... 🚧
<br>
<br>

# BDTI ToDo List

<br>
<br>

## 💻 **Sobre o projeto**

<br>

Desenvolvimento de teste de avaliação React, consistindo na criação de uma aplicação de lista de tarefas (todo list) utilizando o redux para armazenar os estados da aplicação.

Documentação do projeto: [BDTI-ToDo List](https://www.notion.so/Next-Level-Week-5-1-Dia-d4487ff53f0f4130b9077d1a5deaecfe)

<br> <br>

## 📖 **Tabela de conteúdos**

<br>

- [Sobre o projeto](#-sobre-o-projeto)
- [Tabela de Conteúdo](#-tabela-de-conteúdos)
- [Escopo](#-escopo)
- [Etapas de desenvolvimento](#-etapas-de-desenvolvimento)
- [Layout](#-layout)
- [Escolha das Ferramentas](#-escolha-das-ferramentas)
- [Desenvolvimento da aplicação](#-desenvolvimento-da-aplicação)

<br>

## 🔩 **Escopo**

Crie, utilizando React com Redux, uma lista de tarefas (Todo), onde deverá ser possível:

- [x] Listar Todas as Tarefas
- [x] Listar as tarefas ainda não concluídas
- [x] Listar as tarefas já concluídas
- [x] Marcar determinada tarefa como concluída (Mostrar visualmente que foi concluída)
- [x] Inserir novas tarefas
- [x] Alterar a descrição de uma tarefa
- [x] Excluir tarefa da lista
- [x] Exibir contadores: Total de tarefas, Tarefas concluídas e Não concluídas

Obs[1]: As tarefas deverão ser armazenadas no LocalStorage do navegador

Obs[2]: Utilizar redux para controlar o estado da aplicação

Obs[3]: Aplicar comentários explicando cada função utilizada

Obs[4]: Design/Layout livre

Pontos que serão avaliados:

- Qualidade do Código
- Design/Layout da aplicação
- Componentização

## 📋 **Etapas de desenvolvimento**

- [x] Definir layout da aplicação
- [x] Escolhas das ferramentas
  - [x] Definir e justificar o uso das ferramentas
- [ ] Desenvolvimento da aplicação
  - [x] Implementação do layout
  - [x] Criar o controle de estado com Redux
  - [x] Criar regras de negócio
  - [x] Salvar as tarefas no LocalStorage
  - [] Checar os comentários de cada função

<br>

## 🎨 **Layout**

<br>

- A aplicação terá um cabeçalho contendo o título.
- A aplicação deverá ter uma lista de tarefas a fazer, tarefas em progresso, tarefas pausadas e tarefas concluídas.
- O usuário poderá adicionar novas listas.
- O usuário poderá mover as tarefas entre as listas.
- O usuário poderá excluir uma tarefa.
- O usuário poderá editar a tarefa.
- A lista deverá apresentar a quantidade de tarefas existentes.
- A clicar sobre uma tarefa, o card deverá apresentar todas as informações contidas e permitir a sua alteração.

<br>

<p align="center">
  <img src="./public/images/ToDo.png" alt="Página principal da aplicação">
  
  <br>
  Layout da página principal da aplicação.
  <br>
  <br>
</p>
<p align="center">
  <img src="./public/images/ToDoModal.png" alt="O cartão de tarefas aparece centralizado na página sobre o fundo da tela principal que esta com uma menor opacidade">
  
  <br>
  Layout do cartão de tarefas.
  <br>
  <br>
</p>

## 🛠 **Escolha das ferramentas**

<br>

A aplicação deverá ser desenvolvida utilizando-se o ReactJS e Redux conforme o escopo do teste, a linguagem a ser utilizada será o javascript.

Para configuração do store Redux utilizarei a ferramenta ReduxJS Toolkit. Quanto a persistencia dos dados no localStore vou utilizar a biblioteca Redux Persist.

A geração dos ids, tando do cartão quanto das listas ficará a cargo do UUID, gerando números únicos para cada.

Para a estilização optei pelo styled-component, uma vez que permite a escrita css simples para seus componentes e evita colisões de nomes de classes. Ele ajuda na escrita do css com escopo definido para um único componente e não se aplica em nenhum outro elemento da página.

Quanto aos icones utilizados utilizarei a biblioteca React-icons pela sua flexibilidade e praticidade na utilização, permitindo a sua estilização de uma maneira simples.

Para a construção do botão de adição utilizarei a biblioteca Material UI.

A estilização do modal de cartão, para a alteração dos dados utilizarei o react-spring, ele será responsável pela animação do modal.

Para os cartões, farei uso do React Textarea Autosize, ele facilita o redimensionamente da área de texto do nosso cartão.

Para a função de arrastar os cards entre as lista optei por utilizar o React Beautiful DnD, sendo um utilitário que ajuda na construção de interfaces complexas do tipo arrasta e solta (drag and drop). Este utilitário permite escrever componentes desacoplados, permitindo arrastar os componentes cards entre diferentes listas da aplicação e permitindo alterações de sua aparência e dos estados da aplicação em resposta ao evento arrastar e soltar.

Ferramentas:

- Javascript
- ReactJS
- Redux
- ReduxJs Toolkit
- Redux Persist
- UUID

- Styled-Components
- React-icons
- React-Beautiful-DnD
- Material-UI
- React-Spring

<br>

## 🏋️‍♂️ **Desenvolvimento da aplicação**

### Implementação do Layout

A aplicação possui 4 componentes básicos:

- [x] Cabeçalho
- [x] Painel de controle
- [x] Lista
- [x] Cartão
- [x] Cartão Modal
- [x] Botão de Adicionar Listar
- [x] Botão de Adicionar Cartão

<br>

## Ricardo Granvilla Oliveira

[![Ricardo Granvilla](./public/images/author.png)](https://github.com/rgranvilla)

[![Twitter Badge](https://img.shields.io/badge/-@rgranvilla-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/rgranvilla)](https://twitter.com/rgranvilla)
[![Linkedin Badge](https://img.shields.io/badge/-Ricardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rgranvilla/)](https://www.linkedin.com/in/rgranvilla/)
[![Gmail Badge](https://img.shields.io/badge/-rgranvilla@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rgranvilla@gmail.com)](mailto:rgranvilla@gmail.com)

<br>
<br>
