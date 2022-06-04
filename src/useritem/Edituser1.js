import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export function Edituser1({id}) {
  const history = useHistory();
  return (
    <IconButton aria-label="add to favorites" color="primary"
      onClick={() => history.push(`/user/edit/${id}`)}>  <EditIcon />
    </IconButton>
  );
}
