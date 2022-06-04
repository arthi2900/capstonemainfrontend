import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { APIUser } from './userapi';
export function Adduser() {
 const[userlist, setuserlist]=useState([]);
   const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [about, setAbout] = useState("");
  const history=useHistory();
   return <div>
    <Box
      sx={{
        margin: '2%',
        width: 900,
        maxWidth: '100%',
        marginTop: '3%'
      }}
    >
      <TextField fullWidth label="Name" onChange={(event) => setName(event.target.value)} />
      <TextField fullWidth label="Post" onChange={(event) => setAbout(event.target.value)} />
      <TextField fullWidth label="logo" onChange={(event) => setLogo(event.target.value)} />
      <Button fullWidth variant="outlined" onClick={() => {
        const newuser = {
          name: name,
          logo: logo,
         about: about
        };
        fetch(`${APIUser}/`,{method:"POST",
        body:JSON.stringify(newuser),
      headers:{
        "Content-Type":"application/json"
      },}).then(()=>history.push('/user'));
      
        
      }}>save</Button>
    </Box>
  </div>;
}
