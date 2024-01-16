import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Dashboard() {
  let [products, setProducts] = useState([]);
  let [loading,setLoading] = useState(true);
  let [formdata, setFormdata] = useState({})
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=()=>{
    axios.get('http://localhost:1000/products').then((result)=>{
      console.log(result);
      setProducts(result.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
    })
  }
  const postData =(e)=>{
    e.preventDefault();
    console.log(formdata)
    axios.post('http://localhost:1000/products',formdata).then((result)=>{
      console.log(result.data.message)
    }).catch((err)=>{
      console.log(err)
    })
    setFormdata({})
  }
  const changeHandler =(key,value)=>{
    setFormdata({
      ...formdata,
      [key]:value
    })
  }
  return (
    <>
      <h3>Welcome to admin dashboard</h3>
      <form action='' onSubmit={(e)=>postData(e)}>
        <input type='text' name='title' placeholder='Enter product title' onChange={(e)=>changeHandler(e.target.name,e.target.value)}/><br />
        <input type='text' name='description' placeholder='Enter product description' onChange={(e)=>changeHandler(e.target.name,e.target.value)}/><br />
        <input type='number' name='price' placeholder='Enter product price' onChange={(e)=>changeHandler(e.target.name,e.target.value)}/><br />
        <button>Submit</button>
      </form>
      <hr/>
      <h2>Products from db:</h2>
      <ol>
        {loading ? <>loading.....</> : products.map((product)=>(
            <li key={product._id}>
              <span>{product.title}</span> - <span>{product.description}</span> - <span>Rs. {product.price}</span>
            </li>
        ))}
      </ol>
    </>
  )
}

export default Dashboard
