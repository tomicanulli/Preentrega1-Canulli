import CartWidget from "./CartWidget"
import mainLogo from "../assets/img/main-logo.png"

function Navbar(){
    return(
    <div>
        <img src={mainLogo} width={75}></img>
        <nav>
            <ul>
                <li><a href="#">Relojes</a></li>
                <li><a href="#">Mallas</a></li>
                <li><a href="#">Nuevos Ingresos</a></li>
            </ul>
        </nav>
        <>
            <CartWidget/>
        </>
    </div>         
    )
}
export default Navbar;