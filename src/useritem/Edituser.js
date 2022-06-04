import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';
import { APIUser } from './userapi';
export function Edituser() {
  const[ user, setuser] =useState(null);
  const history = useHistory();
  const { id } = useParams();
  console.log(id, user);
  //const user = userlist[id];
  useEffect(()=>{
    { fetch(`${APIUser}/${id}`,{
      method:"GET",  
      }).then((data)=>data.json())
      .then((mv)=>setuser(mv));}
           },[]);

 // console.log(user);
  
  return (
   <div>
{ user ?<Edituserform user={user}/>:<h2>Loading</h2>}
</div>
  );
}

function Edituserform({user}){
  const history=useHistory();
  const [name, setName] = useState(user.name);
  const [logo, setLogo] = useState(user.logo);
  const [about, setAbout] = useState(user.about);
  return(
    <div className="add-movie-form">
      <TextField fullWidth label="name" id="fullWidth" type="text"
        onChange={(event) => setName(event.target.value)} value={name} />
      <TextField fullWidth label="Degree" id="fullWidth" type="text"
        onChange={(event) => setLogo(event.target.value)} value={logo} />
      <TextField fullWidth label="Year" id="fullWidth" type="text"
        onChange={(event) => setAbout(event.target.value)} value={about} />

      <Button fullWidth onClick={() => {
        const updateuser = {
          name: name, logo: logo, about: about
        };
fetch(`${APIUser}/${user.id}`,{method:"PUT",
body:JSON.stringify(updateuser),
headers:{"Content-Type":"application/json"},} )
.then(()=>history.push("/user"));
           }}>edit</Button>
    </div>
  )
}