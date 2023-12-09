
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";



const SingleCard = () => {
    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch('/api.json')
            .then(res => res.json())
            .then(dat => setData(dat))
    }, [params.id])

    const findItem = data?.find((card) => card.id == params.id)
    const { id, card_bg, title, text_button_bg, picture, price, description } = findItem || {}

    const handleLS = () => {

        const getItem = JSON.parse(localStorage.getItem('item'))
        const arrayName = []
        if (!getItem) {
            arrayName.push(findItem)
            localStorage.setItem("item", JSON.stringify(arrayName))
            Swal.fire({
                title: 'Thank You ! For Your Kind Donation',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        }
        else {


            const isExist =getItem.find((x) =>x.id == id
               )
            if (!isExist) {
                arrayName.push(...getItem, findItem)
                localStorage.setItem("item", JSON.stringify(arrayName))
                Swal.fire({
                    title: 'Thank You ! For Your Kind Donation',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
                }
            else{
                swal("Error!", "You already added this donation!", "error");
             }
           }
    }




    return (
        <>

            {
                <div className="pt-5 pb-20 max-w-6xl mx-auto">
                    <img className=' h-[50vh] md:h-[80vh]  w-full rounded-xl' src={picture} alt="" />
                    <div className="relative h-10 lg:h-24 opacity-70  bg-black rounded bottom-24" >

                        {/* toast show */}
                        <button onClick={handleLS} style={{ color: card_bg, backgroundColor: text_button_bg, borderRadius: 20, padding: 8, opacity: 1 }} className="btn opacity-100 absolute left-10  mt-5" >Donate {price}</button>


                    </div>
                    <div className="">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="text-xl pt-3"> {description}</p>

                    </div>
                </div>

            }

        </>
    );
};

export default SingleCard;