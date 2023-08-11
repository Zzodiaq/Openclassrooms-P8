// import { useRouteError } from "react-router-dom";
import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import '../../styles/error-style/error.css'

export default function ErrorPage() {
  // const error = useRouteError();

  return (
    <div>
      <Header/>
      <div className="error-page">

        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href={`/`}>Retourner sur la page d'accueil</a>

      </div>
      <Footer/>
    </div>

  );
}