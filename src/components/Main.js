import React, { useState, useRef } from 'react';
import InfoList from './InfoList';
import { Link } from 'react-router-dom';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [memos, setMemos] = useState([]);
  function getPostFromServer() {
    axios
      .get('http://localhost:3001/list')
      .then(function (response) {
        console.log('response', response.data);
        setMemos(response.data);
      })
      .catch(function (error) {
        console.log('getPost error', error);
      });
  }

  useEffect(() => {
    getPostFromServer();
  }, []);

  return (
    <div>
      <InfoList memos={memos} />
      <Link to="/CreateInformation">
        <AddCircleOutlineRoundedIcon />
      </Link>
    </div>
  );
}

export default Main;
