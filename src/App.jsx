import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  const [values, setValues] = useState({ name: "", cardNumber: "", monthmax: "", yearmax: "",cvv:""});

    const [data, setData] = useState({});

    const handleInput = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setData({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
    }

    // console.log(data);
  return (
    <div className='w-full h-screen flex md:flex-row flex-col  justify-between'>
      <Cards data={data}/>
      <Form values={values} handleInput={handleInput} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App