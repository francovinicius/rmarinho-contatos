import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://api.whatsapp.com/send?phone=5524992272010&text=Oii%2C+Gostaria+de+marcar+uma+consulta%21++">Whatsapp</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://www.instagram.com/rodrigo.marinhonutri/">Instagram</a>
                </div>
            </div>

        </section>
    )
}
