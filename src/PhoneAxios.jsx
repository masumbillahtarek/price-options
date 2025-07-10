import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const PhoneAxios = () => {
    const [phones,setPhones]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       // .then(data=>console.log(data));
       .then(data=>{
        const phoneData=data.data.data;
        const phonesWithFakeData=phoneData.map(phone=>{
            const obj={
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
       // console.log(phonesWithFakeData)
setPhones(phonesWithFakeData)
setLoading(false)
       });
    },[])
    return (
      
         <div>
             {loading &&
  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
       }
            <h2>Phone Length : {phones.length}</h2>
      <BarChart width={700} height={400} data={phones}>
                <CartesianGrid strokeDasharray="7 7" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PhoneAxios;