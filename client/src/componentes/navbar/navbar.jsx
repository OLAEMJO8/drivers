
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
    return (
        <div className='nav-container'>
            <form>
             <input placeholder="Busqueda"/>
             <button>Buscar</button>
            </form>
            <div className='link-container'>
               <Link to="/home">Home</Link>
               <div>
               <Link to="/create">Crear</Link>
            </div>
            </div>
        </div>
    );
}

export default Navbar;