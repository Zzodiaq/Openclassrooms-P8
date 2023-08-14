import downArrow from '../../images/down-arrow.PNG'
import '../../styles/collapse-style/collapse.css'
import { useState } from 'react'


function Collapse({title, description}) {
    const [state, setState] = useState(true)

    const toggleCollapse = () => {
        setState(!state)
    }
    return (
        <div className="collapse" onClick={toggleCollapse}>
            <button className="collapse-button">{title}<img className={`img-arrow ${state ? '' : 'img-rotate'}`}  src={downArrow} alt="error" onClick={toggleCollapse}/></button>
            <div className={`collapse-content ${state ? '' : 'collapse-contentOff'}`}>
                {description}
            </div>
        </div>
    )
}

export default Collapse