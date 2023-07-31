import { useState } from "react"
import { Header } from "../src/components/header/index.jsx";
import { Form } from "../src/components/formSection/index.jsx";
import { Total } from "./components/TotalValeu/index.jsx";
import { Card } from "./components/cardSection/index.jsx";
import "./components/styles/globalStyles/index.scss";




function App() {

  


const [list, setList] = useState ([]);


  return (
    <>
      <div>
        <Header />
        <Form setList={setList} />
        <Total list = {list} setList = {setList} />
        <Card  list={list} setList ={setList} />



      </div>

    </>
  )
}

export default App
