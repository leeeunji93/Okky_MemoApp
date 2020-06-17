import React, { useState } from 'react';
import InfoList from './InfoList';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useEffect } from 'react';
import axios from 'axios';
import './Main.scss';

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
    <div className="memos">
      <div className="title">
        <p>Memo App </p>
        <Link to="/CreateInformation" className="plus">
          <AddCircleIcon />
        </Link>
      </div>
      <InfoList memos={memos} />
    </div>
  );
}

export default Main;
