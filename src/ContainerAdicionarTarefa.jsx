import React, { useState, useEffect } from "react";
import "./ContainerItens.css";

function ContainerAdicionarTarefa({ adicionarItem, tarefaParaEditar }) {
  const [novaListaTarefa, setNovaListaTarefa] = useState("");

  useEffect(() => {
    if (tarefaParaEditar) {
      setNovaListaTarefa(tarefaParaEditar);
    } else {
      setNovaListaTarefa("");
    }
  }, [tarefaParaEditar]);

  function event(e) {
    setNovaListaTarefa(e.target.value);
  }

  function esconderDive() {
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "none";
    }
  }

  function adicionarNovaTarefa() {
    if (novaListaTarefa.trim() !== "") {
      adicionarItem(novaListaTarefa);
      setNovaListaTarefa("");
      esconderDive();
    }
  }

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

export default ContainerAdicionarTarefa;
