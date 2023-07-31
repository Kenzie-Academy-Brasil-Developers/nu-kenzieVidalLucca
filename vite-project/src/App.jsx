import { useState } from 'react'
import { Header } from "../src/components/header/index.jsx";
import { Form } from "../src/components/formSection/index.jsx";
import { Total } from "./components/TotalValeu/index.jsx";
import { Card } from "./components/cardSection/index.jsx";
import "./components/styles/globalStyles/index.scss";




function App() {


  return (
    <>
      <div>
        <Header />
        <Form />
        <Total />
        <Card />



      </div>

    </>
  )
}

export default App
