import { Card } from "../components"
import { DataCollection } from "../api/Data"
// import { Card } from "../components"
const Alchohol = () => {
  return (
    <section id="alcho" className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Важкий алкоголь</h1>
        
    <DataCollection request={'getAlcho'}>
      <Card></Card>
    </DataCollection>
          </div>

        
    </section>
  )
}

export default Alchohol