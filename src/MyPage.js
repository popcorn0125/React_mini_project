import './css/Reset.css';
import './css/MyPage.css';
import Top from './Top.js';

function MyPage() {

    return (
        <>
            <Top/>
            <div className="card-container">
                <div className="card-wrap">
                    <div className="infos">
                        <div className="info">
                            <div>
                                <p className="name">
                                    내정보
                                </p>
                                <p className="function">
                                    Hong Gil Dong
                                </p>
                            </div>
                            <div className="stats">
                                <p className="flex flex-col">
                                    오늘 작성한 게시글 수
                                    <span className="state-value">
                                        34
                                    </span>
                                </p>
                                <p className="flex">
                                    총 게시글 수
                                    <span className="state-value">
                                        455
                                    </span>
                                </p>

                            </div>
                        </div>
                    </div>
                    <button className="request" type="button">
                        정보 수정
                    </button>
                </div>
            </div>

            <div className="container post-container">

                <div id="products" className="row list-group">
                    <div className="item col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p className="group inner list-group-item-text create-date-fontsize" >
                                    작성일 : 2024.08.31 16:44</p>
                                <div className="row">

                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="/modify?no=1">수정</a>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-delete" href="http://www.jquery2dotnet.com">삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p className="group inner list-group-item-text create-date-fontsize" >
                                    작성일 : 2024.08.31 16:44</p>
                                <div className="row">

                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="/modify?no=1">수정</a>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-delete" href="http://www.jquery2dotnet.com">삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p className="group inner list-group-item-text create-date-fontsize" >
                                    작성일 : 2024.08.31 16:44</p>
                                <div className="row">

                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="/modify?no=1">수정</a>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-delete" href="http://www.jquery2dotnet.com">삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">
                                    Product title</h4>
                                <p className="group inner list-group-item-text">
                                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p className="group inner list-group-item-text create-date-fontsize" >
                                    작성일 : 2024.08.31 16:44</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="/modify?no=1" >수정</a>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-delete" >삭제</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPage;