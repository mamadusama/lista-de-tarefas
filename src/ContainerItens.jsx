import ListaTarefa from "./ListaTarefa";
import "./ContainerItens.css";

function ContainerItens({ ItensTarefa, removerItem, iniciarEdicao }) {
  return (
    <div className="itens-content">
      {ItensTarefa.map((iten, index) => (
        <ListaTarefa
          key={index}
          Tarefa={iten}
          removerItem={removerItem}
          iniciarEdicao={iniciarEdicao}
        />
      ))}
    </div>
  );
}

export default ContainerItens;

/*
    1- O {ItensTarefa } é uma Variavel Props que se encontra 
    na componente Containeritens.

    ### essa variavel como ele é Props , logo pode receber qualquer valor , 
      dentro de componente a que ele pertence e onde aquele componente está a ser chamado. 
      
*/
