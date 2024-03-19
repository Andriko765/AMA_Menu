// import axios from 'axios';
import { Card } from '../components';
// import { useEffect , useState} from 'react';
const Cider = () => {

    // const [ciders, setCider] = useState([]);
    // // const getCatagoryValues = (arr,prop) => {

      
    // //   const values  = arr.map(item => item[prop]);
    // //   const uniqueValues = Array.from(new Set(values));

    // //   return uniqueValues.join('')
    // // };

    // useEffect(() => {
    //      axios.get('http://localhost:5000/getCiders')
    //      .then( res => {console.log(res.data)
    //     setCider(res.data)})
    //      .catch(err=> console.log(err));

        

    // }, []);


  return (
    <section className='w-full'>

    <div className='mx-auto mt-20 mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Сидр</h1>
        
          <Card request={'getCiders'} />

          </div>

        
    </section>
  )
}

export default Cider