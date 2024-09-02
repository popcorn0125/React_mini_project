import './css/Reset.css';
import './css/Detail.css';
import Top from './Top.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Detail() {
    const url = 'http://localhost:5050';
    let [board, setBoard] = useState([]);
    const [searchParams, setSearchParams]=useSearchParams();
    const no = parseInt(searchParams.get('no'));
    const info = {idx:no}
    useEffect(()=>{
        axios({
            method: 'post',
            header: { 'Content-Type': 'application/json; charset=UTF-8' },
            url: url + "/detailBoard",
            data : info
        })
            .then(response => {
                let fetchedBoard = response.data.result[0];

                // create_date를 로컬 시간으로 변환
                const date = new Date(fetchedBoard.create_date);
                fetchedBoard.create_date = date.toLocaleString();

                setBoard(fetchedBoard);
                console.log(board);
            })
            .catch(() => {
                alert('데이터를 불러오는데 실패하였습니다. 나중에 다시 시도해주세요.');
            })
    }, []);

    return (
        <>
            <Top/>
            <div className="wrapper">
                <div className="content">
                    
                    <div className="card-detail">
                 
                        <button className="back-btn">
                            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                            <span>Back</span>
                        </button>
                        
                        <h2><a href="#">{board.title}</a></h2>
                        <p className="date">{board.create_date}</p>
                        <p className="text">{board.content}</p>
                        <p className="date">작성자 : {board.nickname}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Detail;