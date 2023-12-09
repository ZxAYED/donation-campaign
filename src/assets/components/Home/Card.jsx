
import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';


const Card = ({item}) => {


const {id,card_bg,category,category_bg,title,text_button_bg,picture}= item || {}
  return (
    <div >
   
      <Link to={`/Home/${id}`}>
      <div className="card card-compact h-96 bg-base-100 shadow-xl p-5" style={{backgroundColor:category_bg}}>
          <figure><img className="h-40 shadow-xl rounded" src={picture} alt="img" /></figure>
          <div className="card-body mt-4">
            <h2 className="w-fit  " style={{color:card_bg,backgroundColor:text_button_bg, borderRadius:20,padding:8 }} >{category}</h2>
          <p className="text-xl" style={{color:card_bg}}>In this section, we provide {title} Service </p>
        </div>
      </div>

      </Link> </div>
     )
  


};

export default Card;