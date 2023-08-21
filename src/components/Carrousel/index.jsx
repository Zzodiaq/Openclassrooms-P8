import { useState } from 'react'
import '../../styles/carrousel-style/carrousel.css'
import arrow from '../../images/down-arrow.PNG'
import data from "../../data.json";
import { useParams } from 'react-router-dom';

function Carrousel({ images, length}) {
  const { id } = useParams();

  const currentLogement = data.find((d) => d.id === id);

  const imgLen = currentLogement.pictures.length
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    };


    return (
      <div className="carrousel-container">
        <div className="carrousel">
          <button onClick={prevSlide} className="nav-button-prev">
            {imgLen > 1 ? <img src={arrow} alt="error" /> : null}
          </button>

          <img src={images[currentSlide]} alt="error" className='img-background' />
          {imgLen > 1 ? <p>{currentSlide + 1} / {length}</p> : null}

          <button onClick={nextSlide} className="nav-button-next">
            {imgLen > 1 ? <img src={arrow} alt="error" /> : null}
          </button>
        </div>
      </div>
    );
}


export default Carrousel