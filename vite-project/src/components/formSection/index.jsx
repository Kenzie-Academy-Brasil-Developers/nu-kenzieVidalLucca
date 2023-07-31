import { useState } from 'react'

export const Form = () => {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");

    const submit = (event) => {
        event.preventDefault();
        console.log({ title, value })
        setTitle("");
        setValue("");



    }

    return (

        <form onSubmit={submit}>
            <div className="formPart">
                <p className="infos">Descrição</p>

                <input type="text" className="input" placeholder="Digite  aqui sua descrição" value={title} onChange={(event) => setTitle(event.target.value)} />
                <span className="infos">Ex:Compra de roupas</span>
                <p className="infos">Valor (R$)</p>
                <input type="value" placeholder='Valor' value={value} onChange={(event) => setValue(event.target.value)} />

                <span className="infos">Tipo de valor</span>
                <select name="" id="inputValeu">


                    <option value="option1">Entrada </option>
                    <option value="option2">Saída</option>

                </select>
                <button type="submit" className="btn" >Inserir Valor</button>

            </div>
        </form>



    )


};