import { useEffect, useState } from 'react';
import { MainCarduser } from './MainCarduser';
import { APIUser } from './userapi';

export function Displayuser() {
  const[userlist, setuserlist ]=useState([]);
  useEffect(()=>{
    fetch(`${APIUser}`,{method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setuserlist(mvs));
  })
  return (
    <div className='product-layout'>
      {userlist.map(({name,image,logo,id }, index) => <MainCarduser
        key={index}
        name={name}
        image={image} logo={logo}
       id={id} />
      )}
    </div>

  );
}
