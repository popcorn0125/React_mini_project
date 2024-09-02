import { useEffect, useState } from 'react';
import './css/Board.css';
import './css/Reset.css';
import Top from './Top.js';
import axios from 'axios';

function Board() {
    const url = 'http://localhost:5050';
    let [board, setBoard] = useState([]);
    
    useEffect(()=>{
        axios({
            method: 'post',
            header: { 'Content-Type': 'application/json; charset=UTF-8' },
            url: url + "/getBoard",
        })
            .then(response => {
                setBoard(response.data.result);
            })
            .catch(() => {
                alert('데이터를 불러오는데 실패하였습니다. 나중에 다시 시도해주세요.');
            })
    }, []);

    return (
        <>
            <Top />
            
            <div className="blog"> 
                { board != undefined ? board.map((info) => (
                    
                    <div key={info.idx} className="conteudo space">
                        {/* <div className="post-info">
                            Posted by {info.nickname}
                        </div> */}
                        <h1>{info.title}</h1>
                        <hr />
                        <p>{info.content}</p>
                        <hr />
                        <div className="post-info">
                            작성자 : {info.nickname}
                        </div>
                        <br/>
                        <div className="post-info">
                        작성일 : {new Date(info.create_date).toLocaleString()}
                        </div>
                        <br />
                        <a href={`/detail?no=${info.idx}`} className="continue-lendo">
                            Read more →
                        </a>
                    </div>
                )) : ''}  
            </div>
        </>
    );
}

export default Board;