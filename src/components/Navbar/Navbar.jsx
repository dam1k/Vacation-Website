import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Button} from "../Button/Button"
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    function handleClick() {
        setClick(prevState => !prevState)
    }

    function closeMobileMenu() {
        setClick(false)
    }

    function showButton() {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    } 
    
    useEffect(()=>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">TRVL</Link>
                <div className="menu-icon" onClick={()=>{handleClick()}}>
                    <i className={click ? "fas fa-times": 'fas fa-bars'}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link className="nav-links" onClick={()=>{closeMobileMenu()}} to="/">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" onClick={()=>{closeMobileMenu()}} to="/services">
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links" onClick={()=>{closeMobileMenu()}} to="/products">
                            Products 
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-links-mobile" onClick={()=>{closeMobileMenu()}} to="/sign-up">
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-outline' buttonSize="btn-medium">Sign Up</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar