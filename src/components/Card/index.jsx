import '../../styles/card-style/card.css'

function Card({title, backgroundImage}) {
    const divBgImage = {
        backgroundImage : `url(${backgroundImage})`,
    }
    return (
        <card className='card' style={divBgImage}>
            <p>{title}</p>
        </card>
    )
}

export default Card