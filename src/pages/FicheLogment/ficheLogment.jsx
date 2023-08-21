import Carrousel from "../../components/Carrousel"
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import data from "../../data.json";
import '../../styles/logement-style/logement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons'
import Collapse from '../../components/Collapse/index.jsx'

function FicheLogement() {

    const { id } = useParams();
    const currentLogement = data.find((d) => d.id === id);
    if (!currentLogement) {
        return <Navigate to="/error" />;
      }

      let number = currentLogement.rating;
      let rest = 5 - number;
      const stars = [];
      for (let i = 0; i < number; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={fasFaStar} />);
      }
      let x = number
      for (let i = 0; i < rest; i++) {
        stars.push(<FontAwesomeIcon key={x} icon={farFaStar} />);
        x++;
      }
    return (
        <div>
            <Carrousel images={currentLogement.pictures} length={currentLogement.pictures.length}/>
            <div className="logement-description">
                <div className="title">
                    <div className="left">
                        <h1>{currentLogement.title}</h1>
                        <h3>{currentLogement.location}</h3>
                    </div>
                    <div className="right">
                        <h3>{currentLogement.host.name}</h3>
                        <img src={currentLogement.host.picture} alt="error" />
                    </div>
                </div>
                <div className="tag-rate">
                    <div className="left">
                    {currentLogement.tags.map((e, index) => (
                        <div className="tag-style" key={index}>
                            <p>{e}</p>
                        </div>
                    ))}
                    </div>
                    <div className="right">
                    {stars.map((e) => (
                        e
                    ))}
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="left">
                    <Collapse key={`description-${currentLogement.id}`} title='Description' description={currentLogement.description} />
                    </div>
                    <div className="right">
                    {/* <Collapse className='collapse-cont' key={`equipement-${currentLogement.id}`} title='Équipement' description={currentLogement.equipments.map((e) => e + <br> )} /> */}
                    <Collapse className='collapse-cont' key={`equipement-${currentLogement.id}`} title='Équipement' description={currentLogement.equipments.map((e, index) => (
                            <p key={index}>
                            {e}
                            </p>
                        ))} />

                    </div> 
                </div>
            </div>
        </div>


    )
}

export default FicheLogement