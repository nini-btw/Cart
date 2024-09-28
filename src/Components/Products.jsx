import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container,Col,Row} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {addToCart} from '../r.t.k/Slices/cartSlice'
import {fetchProduct} from '../r.t.k/Slices/productSlice'
import { useEffect } from 'react';



function Products(){
  const products =useSelector((state)=>state.product);
  const dispatch =useDispatch();
  
  
  useEffect(()=>{
    dispatch(fetchProduct());
  },[dispatch]);

   return(
    <>
      <h1>Products</h1>
      <Container>
          <Row>
            {
              products.map((p)=>(
                  <Col key={p.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p.image} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>
                        {p.description}
                      </Card.Text>
                      <Button 
                        onClick={()=>{
                          dispatch(addToCart(p));
                        }}
                        variant="primary">
                        Add To Cart
                        </Button>
                    </Card.Body>
                  </Card>
                  </Col>
              ))
            }
          </Row>
      </Container>
    </>
   ) 
}
export default Products;




