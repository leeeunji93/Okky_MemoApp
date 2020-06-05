import React from 'react';

function Memo({ memo }) {
  return (
    <div>
      <b>{memo.title}</b> <span>({memo.date})</span>
      <div>{memo.content}</div>
    </div>
  );
}

function InfoList({ memos }) {
  return (
    <div>
      {memos.map((memo) => (
        <Memo memo={memo} key={memo.id} />
      ))}
    </div>
  );
}

export default InfoList;
