import { DataCollection } from '../api/Data';
import { Card } from '../components';
const Cider = () => {




  return (
    
    <section id='cider' className='w-full mt-36 desktop:mt-44 tablet:mt-40'>

    <div className='mx-auto mt-20 mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Сидр</h1>
    <DataCollection request={'getCiders'}>
      <Card></Card>
    </DataCollection>
         
          </div>

        
    </section>
    
  )
}

export default Cider