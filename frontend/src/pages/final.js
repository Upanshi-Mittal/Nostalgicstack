import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { handlesuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
function Final() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const clearAll=()=>{
        handlesuccess('you have logged out successfully');
        localStorage.clear();
        
        setTimeout(() => {
            
            navigate( '/');
            
        },1000)
    }
    const[loggedInUser, setLoggedInUser] = useState('');
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('name'));
    }, []);

    const fetchProducts = async () => {
        try{
            const headers={
                'authorization':localStorage.getItem('token')
            }
            const response = await fetch('http://localhost:8080/products',{headers});
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }
        catch (error) {
            
        }
    };
    useEffect(() => {
        fetchProducts();
    },[]);
    return (
        
        <div>
            <h1>{loggedInUser}</h1>
            <button onClick={() => clearAll()}>Logout</button>
            <div className={task}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ₹{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading products or none available.</p>
                )}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Final
