import Card from "./Card";


const Cards = ({data}) => {
    return (
        <div  className="max-w-6xl mx-auto">
            <section className="flex  text-center items-center justify-center pb-10 font-semibold">
            <h1 className=" text-3xl text-sky-400  ">Our Services</h1>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
            {
                data?.map(item=> <Card    key={item.id} item={item}> </Card>)
            } 
            </section>
        </div>
    );

};

export default Cards;