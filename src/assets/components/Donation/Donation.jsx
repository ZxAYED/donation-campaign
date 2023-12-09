import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DonationCards from "./DonationCards";
import warn from "../../logo/warn.png"
    


const Donation = () => {
    const [donation,setDonation]=useState([])
    const [show, setShow]=useState(false)
  
    const[nofound , setFound]=useState()
    useEffect(()=>{
const donated =JSON.parse(localStorage.getItem('item'));
if(donated){
    setDonation(donated);
   
   
}
else{

  
    setFound('You Didnt  donated  something yet')
}

    },[])
  
    const Remove=()=>{
localStorage.clear();
<div className="flex justify-center items-center gap-5 h-[90vh] flex-col">
<img src={warn} alt="" />
<h1 className="font-bold text-3xl">No donation history Found</h1> </div>
setDonation([])
 
 }





    return (
        <div>
           
             {donation.length>0 && <div className="flex pt-4  justify-center items-center "><button onClick={Remove}
             className="btn text-white btn-error ">Delete All History</button></div>}
            {nofound ? <div className="flex justify-center items-center gap-5 h-[90vh] flex-col">
                <img src={warn} alt="" />
                <h1 className="font-bold text-xl md:text-3xl">No donation history Found</h1> </div>
                  :<div className="grid  md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto pt-10 pb-5 "> 
                    
    {
     show? donation.map(item=><DonationCards item={item} key={item.id}></DonationCards>) : donation.slice(0,4).map(item=><DonationCards item={item} key={item.id}></DonationCards>) }
                    </div>}


                    { donation.length>4 && !show? <div className="flex pb-10 justify-center items-center "><button onClick={()=>setShow(!show)} className="btn text-white btn-accent ">See All</button></div>:""}
        </div>
    );
};

export default Donation;