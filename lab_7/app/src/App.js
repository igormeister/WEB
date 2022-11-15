import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card'


function Welcome(props) {
  return (
  <Card>
  <Card.Header as="h5">{props.name}</Card.Header>
  <Card.Img variant="top"  src={`${props.image}`}/>
  <Card.Body>
    <Card.Text>
      Ціна: {props.price}
    </Card.Text>
  </Card.Body>
</Card>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Миша Logitech M220 Silent Wireless Black" image="https://content2.rozetka.com.ua/goods/images/big/252387903.jpg" price="1099" />
      <Welcome name="Миша Logitech M185 Wireless Grey" image="https://content1.rozetka.com.ua/goods/images/big/270821079.jpg" price="699" />
      <Welcome name="Миша Logitech M310 Wireless Blue" image="https://content1.rozetka.com.ua/goods/images/big/12239575.jpg" price="799" />
      <Welcome name="Миша A4Tech N-70FX-1 USB Black" image="https://content1.rozetka.com.ua/goods/images/big/10598848.jpg" price="399" />
      <Welcome name="Миша Rapoo 1620 Wireless Black" image="https://content2.rozetka.com.ua/goods/images/big/10600295.jpg" price="299" />
      <Welcome name="Миша 2Е MF220 Wireless Gray" image="https://content.rozetka.com.ua/goods/images/big/203636775.jpg" price="279" />
    </div>
  );
}


export default App;
