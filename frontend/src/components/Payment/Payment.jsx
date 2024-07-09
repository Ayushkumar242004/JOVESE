import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Back from "../common/back/Back";

function KitchenSinkExample() {
  return (
    <>
    <Back title="Payment" />
    <div style={{ display:'flex', justifyContent:'center' }}>
    <Card style={{ width: '25rem', justifyContent:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body>
        <Card.Title>Web development </Card.Title>
        <Card.Title>Auden Smith </Card.Title>
        <Card.Text>
          Summary
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
            <span>Price</span>
            <span>$999</span>
        </div>
       </ListGroup.Item>
        
      <ListGroup.Item>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
            <span>Net discount</span>
            <span>$100</span>
        </div>
       </ListGroup.Item>
        
      <ListGroup.Item>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
            <span>Total</span>
            <span>$899</span>
        </div>
      </ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
      <a href="http://localhost:3000/payment" class="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy Now</a>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default KitchenSinkExample;