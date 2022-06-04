import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';

export function MainCard({ image, name, logo, pid,
}) {
  const history = useHistory();
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 280 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} alt={name} src={logo} />}
            title={name} /> </Card>
      </div>
      <div className="">
        <Card sx={{ maxWidth: 275 }}>
          <CardMedia
            component="img"
            height="390"
            image={image}
            alt={name}
            onClick={() => history.push(`/poster/${pid}`)} />
        </Card>
      </div>
          </div>
  );
}
