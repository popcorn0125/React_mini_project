import axios from 'axios';
import './css/Reset.css';
import './css/SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const movePage = useNavigate();
    const url = 'http://localhost:5050';
    // 로그인 함수
    const register = async () => {
        const member = {
            id : document.getElementById("userId").value,
            pw : document.getElementById("user_password").value,
            name : document.getElementById("user_name").value,
            nickname : document.getElementById("user_nickname").value
        };
        if(member.id === undefined || member.id === null || member.id == '' ) {
            alert('아이디를 입력해주세요');
            return;
        }
        if(member.pw === undefined || member.pw === null || member.pw == '') {
            alert('비밀번호를 작성해주세요');
            return;
        }
        if(member.name === undefined || member.name === null || member.name == '' ) {
            alert('이름을 입력해주세요');
            return;
        }
        if(member.nickname === undefined || member.nickname === null || member.nickname == '' ) {
            alert('닉네임을 입력해주세요');
            return;
        }
        console.log('member id : ',member.id);

        await axios({
            method: 'post',
            header: { 'Content-Type': 'application/json; charset=UTF-8' },
            url: url+"/register",
            data: member,
        })
            .then( response => {
                if(response.data.result == 1) {
                    alert(response.data.message);
                    return ;
                }
                if(response.data.result == 200) {
                    alert(response.data.message);
                    movePage('/');
                }
            })
            .catch(() => {
                alert('오류가 발생했습니다. 나중에 다시 실행해주세요'); 
            })
    }

    return(
        <>
            <div className="signup-container">
                <div className="card">
                    <a className="singup">회원 가입</a>
                    <div className="inputBox">
                        <input type="text" id="userId" name="userId" required="required" />
                            <span className="user">ID</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" id="user_password" name="user_password" required="required"/>
                            <span>Password</span>
                    </div>

                    <div className="inputBox">
                        <input type="text" id="user_name" name="user_name" required="required"/>
                            <span>이름</span>
                    </div>

                    <div className="inputBox">
                        <input type="text" id="user_nickname" name="user_nickname" required="required"/>
                            <span>닉네임</span>
                    </div>

                    <button className="enter" onClick={register}>가입하기</button>
                    <p className="signin">Already have an acount ? <a href="/">Login</a> </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;