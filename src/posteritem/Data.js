import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

export function Data() {
  const [like, setLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  return (
    <div>
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
    </div>
  );
}
