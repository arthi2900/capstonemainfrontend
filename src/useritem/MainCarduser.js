import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';
export function MainCarduser({about, name, logo, id,
}) {
  const history = useHistory();
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 580 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} alt={name} src={logo}     onClick={() => history.push(`/user/${id}`)} />}
            title={name} /> </Card>
      </div>
      <div className="">
        <Card sx={{ maxWidth: 275 }}>
          <h4>{about}</h4>
        </Card>
      </div>
      
    </div>
  );
}
