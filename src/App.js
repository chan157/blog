import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '아래쪽'; //서버에서 데이터 가져왔다고 하자
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [thumbsUp, setThumbs] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function incLike(i) {
    let thumbsCopy = [...thumbsUp];
    thumbsCopy[i] ++
    setThumbs(thumbsCopy)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '16px'} } id={post}>나의 블로그</h4>
      </div>

      <button onClick={()=>{
            let titleCopy = [...title];
            titleCopy[0] = '여자 코트 추천';
            setTitle(titleCopy)
          }}>글수정</button>

      <button onClick={()=>{
        let titleCopy = [...title].sort()
        setTitle(titleCopy)
      }}>가나다정렬
      </button>

      {
        title.map((_, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal)}}>
                { title[i] } 
                <span onClick={() => incLike(i) }>👍</span> { thumbsUp[i] }
              </h4>
              <p>3월 10일 발행</p>
            </div>
          )
        })
      }
      
      {
        modal ? <Modal/> : null
      }

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
