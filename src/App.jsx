import React, { useState } from "react";
import Containeritens from "./ContainerItens";
import ContainerAdicionarTarefa from "./ContainerAdicionarTarefa";
import "./App.css";

// Função principal do componente App
function App() {
  // useState para gerenciar o estado da lista de tarefas
  const [listaTarefa, setlistaTarefa] = useState(["Estudar"]);
  // useState para gerenciar a tarefa que está sendo editada
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);

  // Função para remover um item da lista de tarefas
  function removerItem(item) {
    // Cria uma nova lista de tarefas clonando a lista atual
    const novaListaTarefa = [...listaTarefa];
    // Encontra o índice do item a ser removido
    const indiceItem = novaListaTarefa.indexOf(item);
    // Remove o item da nova lista de tarefas
    novaListaTarefa.splice(indiceItem, 1);
    // Atualiza o estado com a nova lista de tarefas
    setlistaTarefa(novaListaTarefa);
  }

  // Função para adicionar ou editar um item na lista de tarefas
  function adicionarItem(item) {
    if (tarefaParaEditar !== null) {
      // Se uma tarefa está sendo editada, cria uma nova lista de tarefas
      // substituindo a tarefa antiga pela nova
      const novaListaTarefa = listaTarefa.map((tarefa) =>
        tarefa === tarefaParaEditar ? item : tarefa
      );
      // Atualiza o estado com a nova lista de tarefas
      setlistaTarefa(novaListaTarefa);
      // Reseta a tarefa para editar para null
      setTarefaParaEditar(null);
    } else {
      // Se nenhuma tarefa está sendo editada, adiciona a nova tarefa à lista
      const novaitem = [...listaTarefa];
      novaitem.push(item);
      // Atualiza o estado com a nova lista de tarefas
      setlistaTarefa(novaitem);
    }
  }

  // Função para iniciar a edição de um item
  function iniciarEdicao(item) {
    // Define a tarefa para editar
    setTarefaParaEditar(item);
    // Mostra o campo de input para edição
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "block";
    }
  }

  // Renderiza o componente
  return (
    <div className="interface">
      <h1>Lista de Tarefas </h1>
      <div className="borderBotton"></div>
      <ContainerAdicionarTarefa
        adicionarItem={adicionarItem}
        tarefaParaEditar={tarefaParaEditar}
      />
      <Containeritens
        ItensTarefa={listaTarefa}
        removerItem={removerItem}
        iniciarEdicao={iniciarEdicao}
      />
    </div>
  );
}

export default App;
