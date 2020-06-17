import React from 'react';
import { Link } from 'react-router-dom';
import './CreateInformation.scss';
import axios from 'axios';
import { useState } from 'react';

// 여기서 추가 하면 어떻게 Main.js로 데이터가 넘어갈 것인가?
const CreateInformation = () => {
  const [inputs, setInput] = useState({
    title: '',
    category: '',
    content: '',
  });

  const { title, category, content } = inputs;
  const onChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };

  const EnrollPost = () => {
    /*console.log("props", props.title);*/
    axios
      .put('http://localhost:3001/create', {
        /*body: JSON.stringify(props)*/
        title: inputs.title,
        category: inputs.category,
        content: inputs.content,
      })
      .then((response) => {
        console.log('res', response);
      })
      .catch((error) => {
        console.log('err', error);
      });
  };

  return (
    <div className="form_wrapper">
      <form>
        <p>Check Memo</p>
        <input
          className="title"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={onChange}
          value={title}
        />
        <input
          className="category"
          name="category"
          placeholder="카테고리를 입력하세요"
          onChange={onChange}
          value={category}
        />
        <input
          className="content"
          name="content"
          placeholder="내용을 입력하세요"
          onChange={onChange}
          value={content}
        />
      </form>
      <Link to="/">
        <button className="button" onClick={EnrollPost}>
          추가
        </button>
      </Link>
    </div>
  );
};

export default CreateInformation;
