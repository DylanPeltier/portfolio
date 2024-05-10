import '../styles/Nav.css'
import Logo from '../assets/signature.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={Logo} alt="logo" width={100}/>
                </div>
                <div className="menu">
                    <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#403B3B",}} />
                </div>
            </div>
        </>
    )
}

export default Nav