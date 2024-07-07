const ListaTarefa = ({ Tarefa, removerItem, iniciarEdicao }) => {
  function mostrarDive() {
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "block";
    }
  }

  return (
    <div className="lista-tarefa">
      <ul className="tarefa">
        <p>{Tarefa}</p>
      </ul>
      <div>
        <ul className="acoes">
          <div className="add">
            <i onClick={mostrarDive} className="fa-solid fa-plus"></i>
          </div>
          <div className="add">
            <i
              onClick={() => iniciarEdicao(Tarefa)}
              className="fa-solid fa-pen-to-square"
            ></i>
          </div>
          <div className="remover">
            <i
              onClick={() => removerItem(Tarefa)}
              className="fa-solid fa-trash"
            ></i>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ListaTarefa;
