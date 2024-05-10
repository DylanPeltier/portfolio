import '../styles/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Landing() {
    return (
        <>
            <div className="landing">
                <div className="name">
                    <span>Dylan Peltier</span>
                </div>
                <div className="info">
                    <span>UX/UI designer, full-stack web developer<br></br> & graphic designer</span>
                </div>
                <div className="links">
                    <div className="about">
                        <div className="arrow">
                            <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#403B3B",}} />
                        </div>
                        <span className='epilogue'>check out &nbsp;</span><span className='unbounded'>my work</span>
                    </div>
                    <div className="work">
                        <div className="arrow">
                            <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#403B3B",}} />
                        </div>
                        <span className='epilogue'>find out more &nbsp;</span><span className='unbounded'>about me</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing