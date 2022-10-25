import React, {useState } from 'react'
import Button from '../atoms/Button/ButtonSubmit';
import Input from '../atoms/input/Input';
import TitleContainer from '../atoms/title/Title';
import './container.css'

const FormR =()=>{
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName= (e)=> setName(e.target.value)
    const handleChangeLastname= (e)=> setLastname(e.target.value)
    const handleChangeUsername= (e)=> setUsername(e.target.value)
    const handleChangePassword= (e)=> setPassword(e.target.value)
  
    //METODO POST PARA INSERTAR DATOS A UNA BASE DE DATOS
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log('Exito!!');
      const option={
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          username: username ,
          password: password
        })
      }
      fetch('http://44.201.115.90/user', option)
      .then(response=> response.json())
      .then(data=> data.status ?
        alert('Registro Exitoso'):alert('Ha ocurrido un error'))
        .catch(err=> console.log(err))
        window.location.href="./Container.jsx"
    }

    //METODO GET PARA PONER 
    const handleBlur=(e)=>{
      fetch('http://44.201.115.90/user/usernameValidate/'+username)
        .then(response=> response.json())
        .then(data=> data.status ?
          alert('Usuario ocupado'):'')
          .catch(err=> console.log(err))
        }
    return (
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='container' >
          <br />
            <TitleContainer/><br /> <br/>
            <div>            
              <Input type="text" id="name" placeholder="Name" value={name} onChange={handleChangeName} required/>
            </div>
            <br/>
            <div> 
              <Input type="text" id="lastname" placeholder="Last Name" value={lastname} onChange={handleChangeLastname} required/>
            </div> 
            <br/>
            <div>            
              <Input type="text" id="username" placeholder="User Name" value={username} onChange={handleChangeUsername} onBlur={handleBlur} required/>
            </div>
            <br/>
            <div>
              <Input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={handleChangePassword} required/>
            </div>
            <br/><br />
            <div>
              <Button value="Register"/>  
            </div>         
        </div>
      </form>
    )
  }
export default FormR;