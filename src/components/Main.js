import React, { useState, useRef } from 'react';
import InfoList from './InfoList';
import { Link } from 'react-router-dom';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CreateInformation from './CreateInformation';

function Main() {
  const [inputs, setInputs] = useState({
    title: '',
    date: '',
    content: '',
  });
  const nameInput = useRef();
  const { title, date, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [memos, setMemos] = useState([
    {
      id: 1,
      title: 'Hook',
      date: '2020년 12월 1일',
      content: 'class만 배우면 될 줄 알았는데. . ',
    },
    {
      id: 2,
      title: 'React',
      date: '2020년 12월 2일',
      content: '너무 재밌당 할 때마다 새로워!',
    },
    {
      id: 3,
      title: 'Redux',
      date: '2020년 12월 3일',
      content: '흠?',
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const memo = {
      id: nextId.current,
      title,
      date,
      content,
    };
    setMemos([...memos, memo]);

    setInputs({
      title: '',
      date: '',
      content: '',
    });
    nameInput.current.focus();
    nextId.current += 1;
  };
  return (
    <div>
      <CreateInformation
        title={title}
        date={date}
        content={content}
        onCreate={onCreate}
        onChange={onChange}
        nameInput={nameInput}
      />
      <InfoList memos={memos} />
      <Link to="/CreateInformation">
        <AddCircleOutlineRoundedIcon />
      </Link>
    </div>
  );
}

export default Main;
