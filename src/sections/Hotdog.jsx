import {Card} from '../components'

const Hotdog = () => {
  return (
    <section className='w-full'>

    <div className='mx-auto mb-3 desktop:max-container tablet: max-w-[720px]'>
    <h1 className=' text-2xl px-4 py-6'>Хот-доги</h1>
        
          <Card request={'getHotDog'} />

          </div>

        
    </section>
  )
}

export default Hotdog