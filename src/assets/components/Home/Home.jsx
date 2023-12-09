import { useLoaderData } from 'react-router-dom';
import img from '../../logo/bg.avif';
import Cards from './Cards';
import './Home.css'
import { useEffect, useState } from 'react';

const Home = () => {
  const [loadData, setLoadData]=useState()
const [ allData ,setALLdata]= useState([])
  const [data,setData]=useState([])
useEffect(()=>{ 
  fetch('./api.json')
  .then(res=>res.json())
  .then(data=>{
    setData(data)
    setALLdata(data)
  })
},[])

    
      const  HandleInput =e=>{
      
    e.preventDefault();
    setLoadData(e.target.value);

    }
    const getStarted =()=>{
    const findData =allData.filter(x=>x.category.toLowerCase().includes(loadData.toLowerCase()) );
    setData(findData);


}
  return (
   
    <div> 
      <section className='mt-2  mb-10 max-w-full '>
        <div className="hero h-[300px] image " style={{
          backgroundImage: `url(${img})`
        }}>
          <div className="hero-overlay  "></div>
          <div className="hero-content text-white ">
            <div className="">
              <h1 className="mb-5 text-2xl text-center  md:text-left lg:text-4xl font-bold">I Grow By helping People In Need</h1>
              <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                <input  onChange={HandleInput}   type="text" className='md:w-[400px] w-[300px]  h-[50px] text-white mx-auto rounded-lg px-5' placeholder='Search Here .... ' />
                <button  onClick={getStarted} className="btn bg-rose-600  text-white w-fit">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >

        <Cards  data={data}></Cards>
      </section>
    

    </div>
  );
};

export default Home;