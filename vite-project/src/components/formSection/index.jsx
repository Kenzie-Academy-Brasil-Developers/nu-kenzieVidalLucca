import { useState } from 'react'

export const Form = ({setList}) => {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("option1");

    const submit = (event) => {
        event.preventDefault();
        const parsedValue = parseFloat(value);

        const amountToAdd = selectedOption === "option1" ? parsedValue : -parsedValue;
        setList((old) => [...old, { title: title, value: amountToAdd, selectedOption: selectedOption }]);
        setTitle("");
        setValue("");
        setSelectedOption("option1");

    }

    return (


        <div className="formPart">


            <form onSubmit={submit}>

                <p className="infos">Descrição</p>

                <input type="text" className="input" placeholder="Digite  aqui sua descrição" value={title} onChange={(event) => setTitle(event.target.value)} />
                <span className="infos">Ex:Compra de roupas</span>
                <p className="infos">Valor (R$)</p>
                <input type="number" placeholder='Valor' value={value} onChange={(event) => setValue(event.target.value)} />

                <span className="infos">Tipo de valor</span>
                <select name="" id="inputValue" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
    <option value="option1">Entrada</option>
    <option value="option2">Despesa</option>
</select>
                <button type="submit" className="btn" >Inserir Valor</button>
            </form>
        </div>




    )


};