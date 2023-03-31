import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'


function ProductDetails(props) {
     const {id}   = useParams()   // {  id:5 }
     const [product,setProduct] = useState({
        image:""
     })
      useEffect(()=>{
          getData()
      },[])

      const getData = async ()=>{
         let res= await  fetch(`https://fakestoreapi.com/products/${id}`)
         let data = await res.json() 
          console.log(data)
          setProduct(data)
      }
    return (
        <div style={{padding:"50px"}}>
            <h2>Product Details Comp : {id}</h2>
            <img src={product.image} width="300" height="300" />
        </div>
    );
}

export default ProductDetails;