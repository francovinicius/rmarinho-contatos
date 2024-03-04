import React from 'react'
import './Profile.css'
import ButtonsProfile from '../Buttons'
import Footer from '../Rodape'

const Profile = () => {
    return (
        <div className='teste'>
            <div data-aos="fade-right" className='profile-div'>
                <div className='div-presentation d-flex flex-column align-items-center'>
                    <img src="./assets/img/profilePic.svg" className='img-profile mt-5' alt="Foto do Dr. Rodrigo" />
                    <img src="./assets/img/logo.svg" className='img-name' alt="Rodrigo Marinho Nutricionista" />
                </div>

                <div>
                    <ButtonsProfile />
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Profile