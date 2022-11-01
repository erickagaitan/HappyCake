import { Link } from "react-router-dom"
import IMG from '../img/imagen_pastel.png'
const Home = ()=> {
return (
    <main>
        <h1>Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <img className="imagen"src={IMG}/>
    </main>

)
}

export default Home