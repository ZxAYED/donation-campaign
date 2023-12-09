

const DonationCards = ({item}) => {
    const {card_bg,category,category_bg,title,text_button_bg,picture,price}=item || {};
    return (
        <div  style={{backgroundColor:category_bg}} className=" flex flex-row p-4 md:p-0 gap-4 ">
            <div className="">
               
                    <img src={picture} className="md:p-4 rounded-lg w-[200px] h-full md:h-[250px] md:w-[300px]  shadow-2xl" /></div>
           
            <div className=' md:pl-5 justify-center  md:pr-10 flex flex-col md:gap-2'>
                <h3 className='w-fit md:p-2 ' style={{color:card_bg,backgroundColor:text_button_bg, borderRadius:5,}}>{title}</h3>
                <h1  className='text-xl md:text-3xl'>{category}</h1>
                <p className='text-xl' style={{color:card_bg}}>{price} $ </p>
                <button style={{backgroundColor:text_button_bg ,color: card_bg}}  className="btn border-none "> View detials</button>
            </div>
            
        </div>
    )
};

export default DonationCards;