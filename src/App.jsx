import React, { useState } from "react";
import Containeritens from "./ContainerItens";
import ContainerAdicionarTarefa from "./ContainerAdicionarTarefa";
import "./App.css";

function App() {
  const [listaTarefa, setlistaTarefa] = useState(["Estudar"]);
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);

  function removerItem(item) {
    const novaListaTarefa = [...listaTarefa];
    const indiceItem = novaListaTarefa.indexOf(item);
    novaListaTarefa.splice(indiceItem, 1);
    setlistaTarefa(novaListaTarefa);
  }

  function adicionarItem(item) {
    if (tarefaParaEditar !== null) {
      const novaListaTarefa = listaTarefa.map((tarefa) =>
        tarefa === tarefaParaEditar ? item : tarefa
      );
      setlistaTarefa(novaListaTarefa);
      setTarefaParaEditar(null);
    } else {
      const novaitem = [...listaTarefa];
      novaitem.push(item);
      setlistaTarefa(novaitem);
    }
  }

  function iniciarEdicao(item) {
    setTarefaParaEditar(item);
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "block";
    }
  }

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
