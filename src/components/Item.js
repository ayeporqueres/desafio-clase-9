import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Item.css';
function Item({ item }) {
  return (
      <Card>
        {/* <Card.Img src={rutaImg} /> */}
        <Card.Body>
          <Card.Title>U$S {item.precio}</Card.Title>
          <Card.Text>{item.descripcion}</Card.Text>
          <div>Stok disponible: {item.stok}</div>
          <Button variant="secundary">Ver detalles</Button>
        </Card.Body>
      </Card>
  )
}

export default Item