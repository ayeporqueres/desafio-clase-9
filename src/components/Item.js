import './styles/Item.css';
import imagenes from '../assets/img';
import { Link } from 'react-router-dom';

function Item({ item}) {
    const estilosImg = {
        backgroundImage: `url(${imagenes[item.seccion]})`,
        backgroundRepeat: 'none',
      backgroundSize: 'cover',
        backgroundPosition:'center'
    }
  return (
    <div className="card">
      <div className="card-img" style={estilosImg}></div>
      <div className="card-info">
        <p className="text-title">{item.descripcion}</p>
      </div>
      <div className="card-footer">
        <span className="text-title">Precio: U$S {item.precio}</span>
        <Link to={`/item/${item.id}`}>Ir a detalles</Link>
      </div>
    </div>
  )
}
export default Item