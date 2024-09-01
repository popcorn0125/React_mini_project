
import './css/Reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './Board.js';
import Login from './Login.js';
import Input from './Input.js';
import MyPage from './MyPage.js';
import SignUp from './SignUp.js';
import Detail from './Detail.js';
import Modify from './Modify.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 게시판페이지 */}
        <Route path="/board" element={<Board />} />
        {/* 상세보기 페이지 */}
        <Route path="/detail" element={<Detail />} />
        {/* 글작성 페이지 */}
        <Route path="/input" element={<Input />} />
        {/* 글작성 페이지 */}
        <Route path="/modify" element={<Modify />} />
        {/* 마이 페이지 */}
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
