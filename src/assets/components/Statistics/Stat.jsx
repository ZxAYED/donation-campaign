import { useEffect, useState } from "react";
  import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Stats = () => {
    const [donation, setDonation] = useState([]);

useEffect(()=>{
    const donated = JSON.parse(localStorage.getItem("item"));
    setDonation(donated);
},[])
const [loadData, setLoadData]=useState()

const [datas,setData]=useState([])
useEffect(()=>{ 
fetch('./api.json')
.then(res=>res.json())
.then(dat=>setData(datas))
},[])



    const data = [
        { name: "Group A", value: 400, color: "red",id:1 },
        { name: "Group B", value: 300, color: "green",id:2 }
      ]

   
      return (
        <div className="pt-10 h-[150vh] lg:h-[100vh]">
        <div  style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {data.map((item) => (
              <p>
                {" "}
                <span
                  style={{ padding: "1px 10px ", backgroundColor: item.color }}
                ></span>{" "}
                {item.name}
              </p>
            ))}
          </div>
        </div>
        </div>
      );
              
};

export default Stats;