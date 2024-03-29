import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import '../../styles/error-style/error.css'

export default function ErrorPage() {

  return (
    <div>
      <Header/>
      <div className="error-page">

        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href={`/`}>Retourner sur la page d'accueil</a>

      </div>
      <div className='push'>

      </div>
      <Footer/>
    </div>

  );
}