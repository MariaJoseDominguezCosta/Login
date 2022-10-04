import React from 'react'
import Button from '../atoms/Button/ButtonSubmit';
import Input from '../atoms/input/Input';
import Label from '../atoms/labels/Label';
import TitleContainer from '../atoms/title/Title';
import './container.css'

const Container = () => {
  return (
    <>
    <div className='container'><br />
            <TitleContainer/><br /> <br/>
            <Input type="text" id="txtUser" placeholder="User Name" required/>
            <br/><br />
            <Input type="email" placeholder="Email" required></Input> <br/><br />
            <Input type="password" className="form-control" placeholder="Password" required></Input><br/><br />
        <Button type="submit" onClick={alert("Exito")} value="Login">Ingresar</Button>      
    </div>
    </>  
  )
}

export default Container;