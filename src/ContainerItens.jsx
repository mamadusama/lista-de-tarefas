import ListaTarefa from "./ListaTarefa";
import "./ContainerItens.css";

// Componente ContainerItens recebe três props: ItensTarefa, removerItem e iniciarEdicao
function ContainerItens({ ItensTarefa, removerItem, iniciarEdicao }) {
  return (
    // Div que contém os itens de tarefas
    <div className="itens-content">
      {ItensTarefa.map((iten, index) => (
        // Para cada tarefa na lista de ItensTarefa, renderiza um componente ListaTarefa
        <ListaTarefa
          key={index} // Define uma chave única para cada item baseado no índice
          Tarefa={iten} // Passa a tarefa atual como prop
          removerItem={removerItem} // Passa a função removerItem como prop
          iniciarEdicao={iniciarEdicao} // Passa a função iniciarEdicao como prop
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
