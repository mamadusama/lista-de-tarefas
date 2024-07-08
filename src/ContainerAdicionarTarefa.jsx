import React, { useState, useEffect } from "react";
import "./ContainerItens.css";

// Componente funcional ContainerAdicionarTarefa que recebe duas props: adicionarItem e tarefaParaEditar
function ContainerAdicionarTarefa({ adicionarItem, tarefaParaEditar }) {
  // useState para gerenciar o valor do input de nova tarefa
  const [novaListaTarefa, setNovaListaTarefa] = useState("");

  // useEffect para atualizar o input quando tarefaParaEditar mudar
  useEffect(() => {
    if (tarefaParaEditar) {
      // Se houver uma tarefa para editar, define o valor do input para a tarefa a ser editada
      setNovaListaTarefa(tarefaParaEditar);
    } else {
      // Se não houver tarefa para editar, limpa o input
      setNovaListaTarefa("");
    }
  }, [tarefaParaEditar]); // O useEffect depende de tarefaParaEditar

  // Função para atualizar o estado novaListaTarefa com o valor do input
  function event(e) {
    setNovaListaTarefa(e.target.value);
  }

  // Função para esconder o campo de adicionar tarefa
  function esconderDive() {
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "none";
    }
  }

  // Função para adicionar uma nova tarefa ou editar uma existente
  function adicionarNovaTarefa() {
    if (novaListaTarefa.trim() !== "") {
      // Adiciona a nova tarefa usando a função passada como prop
      adicionarItem(novaListaTarefa);
      // Limpa o input
      setNovaListaTarefa("");
      // Esconde o campo de adicionar tarefa
      esconderDive();
    }
  }

  // Renderização do componente
  return (
    <div id="adicionar-tarefa" className="adicionar-tarefa">
      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaListaTarefa}
        onChange={event}
      />
      <button onClick={adicionarNovaTarefa}>
        {tarefaParaEditar ? "Editar" : "Adicionar"}
      </button>
    </div>
  );
}

// Exporta o componente ContainerAdicionarTarefa como padrão do módulo
export default ContainerAdicionarTarefa;
