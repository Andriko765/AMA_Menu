import { Card } from "../components"
import { DataCollection } from "../api/Data"
const Snacks = () => {
  return (
    <section id="snack" className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet:max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Снеки</h1>
    <DataCollection request={'getSnack'}>
      <Card></Card>
    </DataCollection>

          </div>

        
    </section>
  )
  
}

export default Snacks