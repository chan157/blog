import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '아래쪽'; //서버에서 데이터 가져왔다고 하자
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [thumbsUp, thumbsFunc] = useState(0);

  function incLike() {
    thumbsFunc(thumbsUp + 1)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '16px'} } id={post}>나의 블로그</h4>
      </div>

      <button onClick={()=>{
            let titleCopy = [...title];
            titleCopy[0] = '여자 코트 추천';
            changeTitle(titleCopy)
          }}>글수정</button>

      <button onClick={()=>{
        let titleCopy = [...title].sort()
        changeTitle(titleCopy)
      }}>가나다정렬
      </button>

      <div className="list">
        <h4> { title[0] } <span onClick={incLike}>👍</span> { thumbsUp } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
