import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://viniciusduarte.vercel.app/">Meu Portfólio</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://api.whatsapp.com/send?phone=5524999879994&text=Olá, Gostaria de fazer um orçamento!">Whatsapp</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://www.instagram.com/duaartevini/">Instagram</a>
                </div>
            </div>

        </section>
    )
}