export const Total = ({ list, setList }) => {
    console.log(list)

    const totalValue = list.reduce((currentValue, value) => {
        return currentValue + Number(value.value);
    }, 0);

    console.log(totalValue)
    return (
        <div className="total" >
            <div className="value">
                <p>Valor Total:</p>
                <p className="money" >R$ {totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>


            <span>o valor se refere ao saldo</span>


        </div>



    )

};