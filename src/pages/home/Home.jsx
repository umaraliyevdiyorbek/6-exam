import React, { useState,useEffect } from 'react'
import Nav from '../../layout/nav/Nav'
import stay from '../../images/stay.png'
import './Home.css'
import { instance } from '../../api'
import { Link } from 'react-router-dom'
const Home = () => {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response= await instance("/api/posts");
        setData(response.data.data);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData()
  })

  const truncateText = (text) => {
    const words = text.split(' ');
    if(words.length >15){
      return words.slice(0, 15).join(' ') + '...';
    }
    return text
  };
  const truncateTitle = (title) =>{
    const words = title.split(' ');
    if(words.length >5){
      return words.slice(0, 5).join(' ') + '...';
    }
    return title
  }
  return (
    <>
      <div className="medium">
        <Nav/>
        <img className='stay-back' src={stay} alt="" />
        <h1 className='articles'>All articles</h1>
        <div className='cards'>
          {
            data.map(cards =>
              <Link key={cards.id} className='card1' to={`/post/${cards._id}`}>
              <img className='nature-img' src={cards.image} alt="" />
              <h3 className='nature-title'> {truncateTitle(cards.title)}   </h3>
              <p className='nature-desc'> {truncateText(cards.description)}</p>
              </Link>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home

// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import "./Home.css";

// const Home = () => {
//   const [data,setdata] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//         const { data } = await axios.get(
//           'https://ill-pink-coati-tie.cyclic.app/api/posts',
//           );
//           setdata(data.data);
          
//         }catch(error){
//           console.log(error);
//         }
//       };
//       fetchData();
//     },[]);
//     console.log(data);

//   return(
//     <>
//     <div className='medium'>
//       <h1 className='articles'>All articles</h1>
//       <div className='cards'>
//        {data.map((cards,index) => (
//          <p key={index } className='nature-desc'>
//           {cards.description}
//          </p>
//        ))}

//       </div>
//     </div>

//     </>
//   );
// };

// export default Home