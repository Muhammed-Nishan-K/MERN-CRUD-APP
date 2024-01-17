import React, { useEffect, useState } from 'react';
import './Userhome.css';
import axios from 'axios';

function Userhome() {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/user');
      setData(response.data[0].email);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home-main">
      {data ? (
        <h1>Hello welcome  {data}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Userhome;
