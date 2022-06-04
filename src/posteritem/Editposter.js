import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';
import { apiposter } from './apiposter';
export function Editposter() {
  const[poster, setposter]=useState([]);
    const { pid } = useParams();
  console.log(pid, poster);
  //const poster = posterlist[pid];
  useEffect(()=>{
    { fetch(`${apiposter}/${pid}`,{
      method:"GET",  
      }).then((data)=>data.json())
      .then((mv)=>setposter(mv));}
           },[]);
  //console.log(poster);
 
  return (
    <div>
      {poster ?<Edituserform poster={poster}/>:<h2>Loading</h2>}
    </div>
  );
}
function Edituserform({poster}) {
  const history=useHistory();
  const [name, setName] = useState(poster.name);
  const [logo, setLogo] = useState(poster.logo);
  const [image, setImage] = useState(poster.image);
  return <div className="add-movie-form">
    <TextField fullWidth label="name" id="fullWidth" type="text"
      onChange={(event) => setName(event.target.value)} value={name} />
    <TextField fullWidth label="logo" id="fullWidth" type="text"
      onChange={(event) => setLogo(event.target.value)} value={logo} />
    <TextField fullWidth label="image" id="fullWidth" type="text"
      onChange={(event) => setImage(event.target.value)} value={image} />

    <Button fullWidth onClick={() => {
      const updateposter = {
        name: name, logo: logo, image: image
      };
      fetch(`${apiposter}/${poster.pid}`,{method:"PUT",
      body:JSON.stringify(updateposter),
      headers:{"Content-Type":"application/json"},} )
      .then(()=>history.push("/poster"));
                 }}>edit</Button>
  </div>;
}