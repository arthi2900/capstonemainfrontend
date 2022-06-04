import { MainCard } from './MainCard';
import { apiposter } from './apiposter';
import { useEffect, useState } from 'react';
export function Displayposter() {
  const[posterlist, setposterlist ]=useState([]);
  useEffect(()=>{
    fetch(`${apiposter}`,{method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setposterlist(mvs));
  })
  return (
    <div className='product-layout'>
      {posterlist.map(({name,image,logo,pid}, index) => <MainCard
        key={index}
        name={name}
        image={image} logo={logo}
        pid={pid} />
      )}
    </div>

  );
}
