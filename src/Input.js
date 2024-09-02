import './css/Reset.css';
import './css/Input.css';
import Top from './Top.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Input() {
    const movePage = useNavigate();
    const url = 'http://localhost:5050';
    const createBoard = () => {
        const board = {
            title: document.getElementById("board_title").value,
            writter: document.getElementById("board_writter").value,
            content: document.getElementById("board_content").value,
        }
        if (board.title === undefined || board.title === null || board.title == '') {
            alert('제목을 입력해주세요');
            return;
        }
        if (board.content === undefined || board.content === null || board.content == '') {
            alert('내용을 입력해주세요');
            return;
        }

        axios({
            method: 'post',
            header: { 'Content-Type': 'application/json; charset=UTF-8' },
            url: url + "/createBoard",
            data: board,
        })
            .then(response => {
                if (response.data.result == 200) {
                    alert(response.data.message);
                    movePage('/board');
                }
            })
            .catch(() => {
                alert('오류가 발생했습니다. 나중에 다시 실행해주세요');
            })
    }

    return (
        <>
            <Top />
            <body>
            <div className="input-container">
                <div className="modal">
                    <div className="modal__header">
                        <span className="modal_header_position">
                            <button className="back-btn" onClick={() => {window.history.back()}}>
                                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                                <span>Back</span>
                            </button>
                        </span>
                        <span className="modal__title">글 작성</span>
                        
                    </div>
                    <div className="modal__body">
                        <div className="input">
                            <label className="input__label">제목</label>
                            <input className="input__field" type="text" id="board_title" />
                        </div>
                        <div className="input">
                            <label className="input__label">작성자</label>
                            <input className="input__field" type="text" id="board_writter" disabled value={sessionStorage.getItem('USERID')} />
                        </div>
                        <div className="input">
                            <label className="input__label"  >내용</label>
                                <textarea className="input__field input__field--textarea" id="board_content"></textarea>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button className="button button--primary" onClick={createBoard} >글 작성 완료</button>
                    </div>
                </div>
            </div>
            </body>
        </>
    );
}

export default Input;
