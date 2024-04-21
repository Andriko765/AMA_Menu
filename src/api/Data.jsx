import React, {  useEffect , useState} from 'react';
import axios from 'axios';


  export const ProductContext = React.createContext(); 

 export const DataCollection = ({children,request}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`https://amaapi.up.railway.app/${request}`)
        .then( res => {
       setProducts(res.data)})
        .catch(err=> console.log(err));
    }, []);

    return(
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
        
    )

}


