// Componente funcional ListaTarefa que recebe três props: Tarefa, removerItem, iniciarEdicao
const ListaTarefa = ({ Tarefa, removerItem, iniciarEdicao }) => {
  // Função para mostrar o campo de adicionar tarefa, definindo seu estilo display como "block"
  function mostrarDive() {
    const elemento = document.querySelector(".adicionar-tarefa");
    if (elemento) {
      elemento.style.display = "block";
    }
  }

  // Renderização do componente
  return (
    <div className="lista-tarefa border-botton">
      <ul className="tarefa ">
        <p>{Tarefa}</p> {/* Exibe a tarefa atual */}
      </ul>

      <div>
        <ul className="acoes">
          <div className="add">
            {/* Ícone para mostrar o campo de adicionar tarefa */}
            <i onClick={mostrarDive} className="fa-solid fa-plus"></i>
          </div>
          <div className="add">
            {/* Ícone para iniciar a edição da tarefa, chamando a função iniciarEdicao com a tarefa atual */}
            <i
              onClick={() => iniciarEdicao(Tarefa)}
              className="fa-solid fa-pen-to-square"
            ></i>
          </div>
          <div className="remover">
            {/* Ícone para remover a tarefa, chamando a função removerItem com a tarefa atual */}
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

// Exporta o componente ListaTarefa como o padrão do módulo
export default ListaTarefa;
