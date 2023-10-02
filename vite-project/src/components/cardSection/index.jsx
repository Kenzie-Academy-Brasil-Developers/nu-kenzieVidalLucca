export const Card = ({ list, setList }) => {
    console.log(list);
  
    const deleteButton = (index) => {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
    };
  
    return (
      <div>
        <h3>Resumo financeiro</h3>
        <ul className="cardSec">
          {list.length === 0 ? (
            <p className="display">Nenhum valor registrado</p>
          ) : (
            list.map(({ title, value, selectedOption }, index) => (
              <li key={index}>
                <div className={`card ${selectedOption === "option1" ? "greenBorder" : "redBorder"}`}>
                  <div className="resume">
                    <h4 className="showTitle">{title}</h4>
                    <p className="showValue">{"R$ " + value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="options">
                    <p className="optionSelect">
                      {selectedOption === "option1" ? "Entrada" : "Saída"}
                    </p>
                    <button className="delete" onClick={() => deleteButton(index)}>
                      Excluir
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };
  