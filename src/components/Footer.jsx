

const Footer = () => {
  return (
    <footer className="border-t pt-4 px-4  desktop:max-container tablet: max-w-[720px] pb-8  mx-auto">

    <div  className=" flex  gap-10">
   
      <div className="  flex flex-col gap-3  text-base">
        <h2 >
        <span className="text-[#B9B9B9] mb-4">Wi-Fi:</span>
           <br/>
          AMA-HUB
        </h2>
        <h2 >
          <span className=" text-[#b9b9b9]">
            Пароль:
          </span>
          12345678
        </h2>
      </div>

      <div>
        <h3>
          вулиця Театральна, 44, Коломия, Івано-Франківська область
        </h3>
        <h2>
          <span className="text-[#b9b9b9]">Робочі години:</span> 14:00 - 23:00
        </h2>
      </div>
</div>
      <div  className=" text-center w-full">
      З любов'ю ❤️ AMA HUB

      </div>

    </footer>
  )
}

export default Footer