
import axios from 'axios';
import './css/App.css';
import './css/Reset.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const url = 'http://localhost:5050';
    const movePage = useNavigate();
    const goBoard = () => {
        movePage('/board');
    };
    const goToSignUp = () => {
        movePage('/signup');
    };

    const login = () => {
        const member = {
            id: document.getElementById("userId").value,
            pw: document.getElementById("user_password").value,
        };
        if (member.id === undefined || member.id === null || member.id == '') {
            alert('아이디를 입력해주세요');
            return;
        }
        if (member.pw === undefined || member.pw === null || member.pw == '') {
            alert('비밀번호를 작성해주세요');
            return;
        }
        axios({
            method: 'post',
            header: { 'Content-Type': 'application/json; charset=UTF-8' },
            url: url + "/login",
            data: member,
        })
            .then(response => {
                console.log('result', response.data);
                if (response.data.result == 0) {
                    alert(response.data.message);
                    return;
                }
                if (response.data.result != null) {
                    alert('로그인 성공');
                    sessionStorage.setItem('USERID', response.data.result);
                    sessionStorage.setItem('NICKNAME', response.data.nickname);
                    movePage('/board');
                }
            })
            .catch(() => {
                alert('오류가 발생했습니다. 나중에 다시 실행해주세요');
            })
    };

    return (
        <div className="login-container">
            <div className="form">
                <div className="flex-column">
                    <label>ID </label></div>
                <div className="inputForm">
                    <input placeholder="Enter your ID" className="input" type="text" name="userId" id="userId" />
                </div>

                <div className="flex-column">
                    <label>Password </label></div>
                <div className="inputForm">
                    <input placeholder="Enter your Password" className="input" type="password" name="user_password" id="user_password" />
                </div>

                <div className="flex-row">
                    <div>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit" onClick={login}>Sign In</button>
                <p className="p">Don't have an account? <span className="span" onClick={goToSignUp}>Sign Up</span>

                </p><p className="p line">Or</p>

                <div className="flex-row">
                    <button className="btn google" onClick={goBoard} >
                        로그인 없이 이용하기
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 90 90" height="20" id="enter">
                            <path d="M89 13v66c0 2.2-1.8 4-4 4H32.9c-2.2 0-3.9-1.8-3.9-4V60.7c0-2.2 1.8-4 4-4s4 1.8 4 4V75h44V17H37v14.3c0 2.2-1.8 4-4 4s-4-1.8-4-4V13c0-2.2 1.7-4 3.9-4H85c2.2 0 4 1.8 4 4zM46.5 58.9c-1.6 1.6-1.5 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2l15.7-15.8c1.5-1.6 1.5-4.1 0-5.6l-15.6-16c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l8.9 9L7 42c-2.2 0-4 1.8-4 4s1.8 4 4 4l48.4-.1-8.9 9z"></path>
                        </svg></button>
                </div>
            </div>
        </div>
    );
}

export default Login;
