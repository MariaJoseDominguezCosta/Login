import React, {useState } from 'react'
import Button from '../atoms/Button/ButtonSubmit';
import Input from '../atoms/input/Input';
import TitleContainer from '../atoms/title/Title';
import './container.css'
import {Redirect} from 'react-dom';

const FormL =()=>{
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername= (e)=> setUsername(e.target.value)
    const handleChangePassword= (e)=> setPassword(e.target.value)
  
    const goTo=()=>{
      return this.props.history('/register');
    };
    //METODO POST PARA INSERTAR DATOS A UNA BASE DE DATOS
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log('Exito!!');
      const option={
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username ,
          password: password
        })
      }
      fetch('http://44.201.115.90/user', option)
      .then(response=> {
        response.status===200 ? response.json():<></>
      })
      .then(data=> data.status ?
        alert('INICIO DE SESION EXITOSO'):alert('Ha ocurrido un error'))
        .catch(err=> console.log(err))
    }
    
    //METODO GET PARA PONER 
    const handleBlur=()=>{
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
              <Input type="text" id="username" placeholder="User Name" value={username} onChange={handleChangeUsername} onBlur={handleBlur} required/>
            </div>
            <br/>
            <div>
              <Input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={handleChangePassword} required/>
            </div>
            <br/><br />
            <div>
              <Button value="Login"/>
            </div>                
            <p type="link" onClick={goTo}>register now!</p>       
        </div>
      </form>
    )
  }
export default FormL