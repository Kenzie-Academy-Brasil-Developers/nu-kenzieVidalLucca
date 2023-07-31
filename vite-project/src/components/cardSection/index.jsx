export const Card = ({ title, value }) => {

    return (

        <div><h3>Resumo financeiro</h3>

            <div className="cardSec">


                <li>
                    <div className="resume">
                        <h4> descrição {title}  </h4>
                        <p>  R$ 00,00{value}</p>

                    </div>


                    <div className="options">
                        <p>Entrada</p>
                        <button className="delete"> Excluir</button>
                    </div>
                </li>


            </div>
        </div>


    )

};