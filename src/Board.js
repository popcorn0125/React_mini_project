import './css/Board.css';
import './css/Reset.css';
import Top from './Top.js';

function Board() {

    return (
        <>
            <Top />
            <div className="blog">
                <div className="conteudo space">
                    <div className="post-info">
                        Posted by Michael
                    </div>
                    
                    <h1> Lorem Ipsum Dolor </h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <hr/>
                    <div className="post-info">
                        작성일 - 2022.02.02 16:55
                    </div>
                    <br/>
                    <a href="/detail?no=1" className="continue-lendo">Read more →</a>
                </div>
                
            </div>
            
        </>
    );
}

export default Board;