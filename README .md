
# Aplicação de Lista de Tarefas

## Descrição Geral

Esta aplicação de Lista de Tarefas permite aos usuários adicionar, remover e editar tarefas. Foi construída utilizando React, uma biblioteca JavaScript popular para a construção de interfaces de usuário. A aplicação é composta por vários componentes que trabalham juntos para fornecer a funcionalidade desejada.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS**: Utilizado para estilizar a interface.
- **JavaScript**: Linguagem de programação utilizada para a lógica da aplicação.

## Estrutura do Projeto

O projeto é dividido em vários componentes:

1. **App.js**: Componente principal que gerencia o estado da lista de tarefas.
2. **ContainerAdicionarTarefa.js**: Componente para adicionar e editar tarefas.
3. **ContainerItens.js**: Componente que lista todas as tarefas.
4. **ListaTarefa.js**: Componente individual para cada tarefa na lista.

## Detalhamento dos Componentes

### App.js

**Função:**
- Gerencia o estado da aplicação e coordena a interação entre os componentes filhos.
- Utiliza `useState` para gerenciar o estado da lista de tarefas (`listaTarefa`) e a tarefa atualmente sendo editada (`tarefaParaEditar`).

**Principais Funções:**
- `removerItem(item)`: Remove uma tarefa da lista.
- `adicionarItem(item)`: Adiciona uma nova tarefa ou edita uma tarefa existente.
- `iniciarEdicao(item)`: Define a tarefa que está sendo editada e mostra o campo de input para edição 

### ContainerAdicionarTarefa.js

**Função:**
- Lida com a adição e edição de tarefas.

**Principais Funções e Hooks:**
- `useState` para gerenciar o valor do input (`novaListaTarefa`).
- `useEffect` para preencher o campo de input com a tarefa atual quando o usuário está editando uma tarefa.
- `event(e)`: Atualiza o estado com o valor do input.
- `esconderDive()`: Esconde o campo de input após adicionar ou editar uma tarefa.
- `adicionarNovaTarefa()`: Adiciona ou edita uma tarefa e oculta o campo de input.

### ContainerItens.js

**Função:**
- Lista todas as tarefas e passa as funções de remoção e edição para cada tarefa.

**Principais Props:**
- `ItensTarefa`: Array de tarefas a serem exibidas.
- `removerItem`: Função para remover uma tarefa.
- `iniciarEdicao`: Função para iniciar a edição de uma tarefa.

### ListaTarefa.js

**Função:**
- Representa uma tarefa individual e permite a edição ou remoção da mesma.

**Principais Funções:**
- `mostrarDive()`: Exibe o campo de input para adicionar ou editar uma tarefa.
- Ícone de edição: Chama `iniciarEdicao` com a tarefa atual.
- Ícone de remoção: Chama `removerItem` com a tarefa atual.

## Fluxo de Trabalho

1. **Adição de Tarefas**:
   - O usuário digita uma nova tarefa no campo de input no `ContainerAdicionarTarefa.js`.
   - Ao clicar no botão "Adicionar", a tarefa é adicionada à lista gerenciada pelo `App.js`.

2. **Edição de Tarefas**:
   - O usuário clica no ícone de edição em uma tarefa listada no `ListaTarefa.js`.
   - A tarefa é carregada no campo de input no `ContainerAdicionarTarefa.js`.
   - O usuário pode modificar a tarefa e clicar em "Editar" para atualizar a tarefa existente.

3. **Remoção de Tarefas**:
   - O usuário clica no ícone de lixeira em uma tarefa listada no `ListaTarefa.js`.
   - A tarefa é removida da lista gerenciada pelo `App.js`.

## Estilo e UX

- **CSS**: Utilizado para estilizar os componentes e melhorar a interface do usuário.
- **Componentização**: A aplicação é dividida em componentes reutilizáveis, tornando-a modular e fácil de manter.
- **React Hooks**: Utilizados para gerenciar estado e efeitos colaterais, proporcionando uma abordagem declarativa e eficiente.

## Conclusão

Esta aplicação de Lista de Tarefas é um exemplo simples e eficiente de como utilizar React para construir uma interface de usuário interativa. A estrutura de componentes facilita a manutenção e extensão do código, enquanto os hooks do React permitem um gerenciamento de estado e efeitos colaterais de forma declarativa.
