import React from 'react';

interface UserProps {
  name: string;
  address?: string;
  age?: number;
}

const User: React.FC<UserProps> = ({ name, address, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      {address && <p>Address: {address}</p>}
      {age !== undefined && <p>Age: {age}</p>}
    </div>
  );
};

export default User;
