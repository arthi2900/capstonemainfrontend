import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiposter } from './apiposter';
export function AddPoster() {
  const [poster, setposter]=useState([]); 
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");
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
      <TextField fullWidth label="Post" onChange={(event) => setImage(event.target.value)} />
      <TextField fullWidth label="logo" onChange={(event) => setLogo(event.target.value)} />
      <Button fullWidth variant="outlined" onClick={() => {
        const newposter = {
          name: name,
          logo: logo,
         image: image
        };
        fetch(`${apiposter}/`,{method:"POST",
        body:JSON.stringify(newposter),
      headers:{
        "Content-Type":"application/json"
      },}).then(()=>history.push('/Poster'));
      
            }}>save</Button>
    </Box>
  </div>;
}
