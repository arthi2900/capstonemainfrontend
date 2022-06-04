import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edituser1 } from './Edituser1';
import { useEffect,useState } from 'react';
import { APIUser } from './userapi';
export function Viewuser() {
  const { id } = useParams();
  const history = useHistory();
    const [user, setuser] =useState([]);
    const getuser=()=>{
      { fetch(`${APIUser}/${id}`,{
        method:"GET",  
        }).then((data)=>data.json())
        .then((mv)=>setuser(mv));}
              
    }
    useEffect(()=>getuser(),[]);
    const deleteUser=(id)=>{fetch(`${APIUser}/${id}`,{
      method:"DELETE",  
      }).then(()=>history.push('/User'));
 
    }
  return (
  <div>
      <div>
    <Card sx={{ maxWidth: 755, margin: '10%' }}>
        <h5>Profile</h5>
        <div className="headeruser" sx={{ margin: '30%' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500], margin: '10%', gap: '10%' }}
              alt={user.name} src={user.logo}
              onClick={() => history.push('/User')} />} title={user.name}
            subheader={user.about} />
           <div className='item'>
              <IconButton className="Like-dislike" aria-label="like" color="primary"
               onClick={() => deleteUser(id)}>
                <DeleteIcon />
              </IconButton> 
              <Edituser1 id={id} />
            </div>
          </div>
        <hr />
        <div>
          <Card sx={{ maxWidth: 655, margin: '10%', textAlign: 'center' }}>
           <h1>Post</h1> 
                       </Card>
  </div>
  <Button onClick={() => history.goBack()}>back</Button>
  </Card>
          </div>
        </div>
      );
}
function CommentList(){
  return(
    <h1>kfhkhdfjke</h1>
  )
}
