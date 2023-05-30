import styles from './Banner.css'

export default function Banner() {
    return (
        <section>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='d-flex align-items-center justify-content-center navegacao'>
                    <a className="nav-link" href="/about">Sobre</a>
                    <a className="nav-link" href="/">Links</a>
                </div>

                <img className="img-perfil img-fluid" src="./assets/img/rodrigo-profile.png" alt="Minha foto" />
                <img className="img-logo-rod img-fluid" src="./assets/img/logo.svg" alt="Minha foto" />

            </div>

        </section>
    )
}