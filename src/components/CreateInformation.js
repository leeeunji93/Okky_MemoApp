import React from 'react';
import { Link } from 'react-router-dom';

// 여기서 추가 하면 어떻게 Main.js로 데이터가 넘어갈 것인가?
const CreateInformation = ({
  nameInput,
  onChange,
  title,
  date,
  content,
  onCreate,
}) => {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="제목을 입력하세요"
          onChange={onChange}
          value={title}
          ref={nameInput}
        />
        <input
          name="date"
          placeholder="날짜를 입력하세요"
          onChange={onChange}
          value={date}
        />
        <input
          name="content"
          placeholder="내용을 입력하세요"
          onChange={onChange}
          value={content}
        />
      </form>
      <Link to="/">
        <button onClick={onCreate}>추가</button>
      </Link>
    </div>
  );
};

export default CreateInformation;
