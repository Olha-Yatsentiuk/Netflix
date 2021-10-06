import React, { useState } from 'react';
import { Button } from './Likes.styles';



export default function Likes({ children, ...restProps }) {
  const [likes, setLikes] = useState(0);
  return (
       <Button onClick={() => setLikes (likes + 1)}>
        {likes} &#10084;
      </Button>
  );
};
