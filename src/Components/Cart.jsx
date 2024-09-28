import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { clearCart,removeFromCart } from '../r.t.k/Slices/cartSlice';

function Cart (){
    const myCart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();

    const totalPrice = myCart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)


    return(
        <>
        <h1>Cart</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { 
                    myCart.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td className='m-auto'><img src={e.image} style={{width:"50px",height:"50px"}}></img></td>
                            <td>{e.price}$</td>
                            <td>{e.quantity}</td>
                            <td><Button variant="danger"
                                 onClick={()=>{
                                     dispatch(removeFromCart(e));
                            }}>Delete</Button></td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{totalPrice.toPrecision(4)}</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        <Button variant="warning" 
            onClick={
                ()=>dispatch(clearCart())
            }
        >
        Clear
        </Button>

        </>
    )
}
export default Cart;


