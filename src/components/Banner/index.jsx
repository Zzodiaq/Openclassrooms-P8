import '../../styles/banner-style/banner.css'

function Banner({showText, imageSrc, height}) {
    const bannerSize = {
        height: height
    }
    return (
        <div className='banner1' style={bannerSize}>
            <img  className='img' src={imageSrc} alt="error"/>
            {showText && <h2>Chez vous, partout ailleurs</h2>}
        </div>
    )

}

export default Banner