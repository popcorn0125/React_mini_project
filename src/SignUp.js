import './css/Reset.css';
import './css/SignUp.css';

function SignUp() {

    return(
        <>
            <div className="signup-container">
                <div className="card">
                    <a className="singup">회원 가입</a>
                    <div className="inputBox">
                        <input type="text" required="required" />
                            <span className="user">ID</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required"/>
                            <span>Password</span>
                    </div>

                    <div className="inputBox">
                        <input type="text" required="required"/>
                            <span>이름</span>
                    </div>

                    <div className="inputBox">
                        <input type="text" required="required"/>
                            <span>닉네임</span>
                    </div>

                    <button className="enter">가입하기</button>
                    <p className="signin">Already have an acount ? <a href="/">Login</a> </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;