import React from 'react'
import './Buttons.css'


const ButtonsProfile = () => {

  const phoneNumberUnimed = '2433366000';
  const phoneNumberStCasa = '2433258300';
  const phoneNumberOncobarra = '2433257777';
  const phoneNumberCentroOrto = '2433239567';

  return (
    <div className='ButtonsProfile-div d-flex flex-column align-items-center'>
      <p className='fw-semibold'>Locais de Atendimento:</p>
      <a className="nav-link" aria-current="page" target='_blank' href="https://api.whatsapp.com/send?phone=5524992272010&text=Oii%2C+Gostaria+de+marcar+uma+consulta%21++"><button className='btn btn-template'>Whatsapp</button></a>
      <a className="nav-link" aria-current="page" target='_blank' href="https://www.instagram.com/nutri.rodrigomarinho/"><button className='btn btn-template'>Instagram</button></a>      
    </div>
  )
}

export default ButtonsProfile