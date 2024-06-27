import {Card} from '../components'
import { DataCollection } from '../api/Data'
const Hotdog = () => {
  return (
    <section id='hot-dog' className='w-full mt-4 '>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Хот-доги</h1>
    <DataCollection request={'getHotDog'}>
      <Card></Card>
    </DataCollection>

          </div>

        
    </section>
  )
}

export default Hotdog