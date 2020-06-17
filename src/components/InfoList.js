import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import axios from 'axios';
import { useHistory } from 'react-router';
import './InfoList.scss';
// import { useEffect } from 'react';

function Memo({ memo }) {
  const history = useHistory();
  const handleOnClick = (id) => {
    axios
      .delete('http://localhost:3001/delete', { data: { id: id } })
      .then(function (response) {
        console.log(response.data);
        if (response.data === 'Delete Succeed') {
          history.push('/createinformation');
        }
      });
  };

  return (
    <div className="info_wrapper">
      <div className="info">
        <div className="info_icon">
          <RemoveCircleIcon
            className="minus"
            onClick={() => handleOnClick(memo.id)}
          />
        </div>
        <div className="infolist">
          <b>제목:{memo.title}</b>
          <div className="info_content">
            <p>내용:</p>
            {memo.content.slice(0, 5)}..
          </div>
          <div className="info_category">#{memo.category}</div>
        </div>
      </div>
    </div>
  );
}

function InfoList({ memos }) {
  return (
    <div className="info_wrapper">
      {memos.map((memo) => (
        <Memo memo={memo} key={memo.id} />
      ))}
    </div>
  );
}

export default InfoList;
