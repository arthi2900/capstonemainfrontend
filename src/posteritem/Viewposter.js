import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Editb1 } from './Editb1';
import { Data } from './Data';
import { apiposter } from './apiposter';
export function Viewposter() {
  
  const { pid } = useParams();
  const history = useHistory();
  const getposter=()=>{
    { fetch(`${apiposter}/${pid}`,{
      method:"GET",  
      }).then((data)=>data.json())
      .then((mv)=>setposter(mv));}
            
  }
  useEffect(()=>getposter(),[]);
  const deleteposter=(pid)=>{fetch(`${apiposter}/${pid}`,{
    method:"DELETE",  
    }).then(()=>history.push('/poster'));

  }
  const [Poster, setposter]=useState([]);
  return (
    <div>
      <Card sx={{ maxwidth: '45%', maxheight: '65%', margin: '5%', }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} alt={Poster.name} src={Poster.logo} />} title={Poster.name} />
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={Poster.image}
            alt={Poster.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Poster.imagename}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Poster.aboutimage}
            </Typography>
            <div className='item'>
              <IconButton className="Like-dislike" aria-label="like" 
              color="primary" onClick={() => {deleteposter(pid)             
              }}>
                <DeleteIcon />
              </IconButton> <Data />
              <Editb1 pid={pid} />
            </div>
            <CommentList/>
            <Button fullWidth onClick={() => history.push('/poster')}> back</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function CommentList(){
  return(
    <h1>kfhkhdfjke</h1>
  )
}