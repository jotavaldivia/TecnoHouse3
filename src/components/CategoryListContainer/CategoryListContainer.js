import React, {useEffect,useState} from 'react'
import CategoryDetail from '../CategoryDetail/CategoryDetail.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import './CategoryListContainer.css'

function CategoryListContainer() {

    let { id } = useParams();
    const [producto, setProductos] = useState([]);
{ useEffect(() => {
 
    fetch('http://localhost:3000/lista.json')
.then(response => response.json())
.then(data => data.productList)
.then(data => data.filter((item)=>{
  return item.title == "Notebook hp"
}))
.then(data => setProductos(data))
},[]);}
    return (
        <div>
           <div className="container">
          {
                    producto.map((item, index) => {
                        return(
                          
                            <CategoryDetail prod={item}/>
                         
                        )
                       
                    })
                }
           
        </div>
        </div>
    )
}

export default CategoryListContainer
