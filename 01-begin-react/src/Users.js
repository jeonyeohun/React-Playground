import React from 'react';

const users = [
    {
      id: 1,
      username: "a",
      email: "a@a.com",
    },
    {
      id: 2,
      username: "b",
      email: "b@a.com",
    },
    {
      id: 3,
      username: "c",
      email: "c@a.com",
    },
  ];
  
  const nextId = useRef(4);
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  export default Users