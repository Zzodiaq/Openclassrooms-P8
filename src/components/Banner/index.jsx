import '../../styles/banner-style/banner.css'

function Banner({showText, imageSrc}) {
    return (
        <div className='banner1'>
            <img className='img' src={imageSrc} alt="error"/>
            {showText && <h2>Chez vous, partout ailleurs</h2>}
        </div>
    )

}

export default Banner