import React from 'react'
import { Link } from 'react-router-dom'

const HotNews = () => {
    return (
        <div className="news">
            <div className="title pb-2">
                <p className="m-0">
                    <b>TIN NỔI BẬT</b>
                </p>
            </div>
            <div className="content">
                <Link to="/tintuc">
                    <div className="card">
                        <div className="row g-0 p-2">
                            <div className="img col-4">
                                <img
                                    src="./img/tin01.png"
                                    className="w-100 h-100"
                                    alt="..."
                                />
                            </div>
                            <div className="col-8">
                                <div className="card-body p-0 ps-2">
                                    <p className="card-text m-0">
                                        Cây Kim Ngân hợp với tuổi nào ?
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src="./img/clock.png" alt="" />
                                            <span>
                                                <i>28/6/2016</i>
                                            </span>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/tintuc">
                    <div className="card">
                        <div className="row g-0 p-2">
                            <div className="img col-4">
                                <img
                                    src="./img/tin02.png"
                                    className="w-100 h-100"
                                    alt="..."
                                />
                            </div>
                            <div className="col-8">
                                <div className="card-body p-0 ps-2">
                                    <p className="card-text m-0">
                                        Cây Kim Ngân hợp với tuổi nào ?
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src="./img/clock.png" alt="" />
                                            <span>
                                                <i>28/6/2016</i>
                                            </span>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/tintuc">
                    <div className="card">
                        <div className="row g-0 p-2">
                            <div className="img col-4">
                                <img
                                    src="./img/tin03.png"
                                    className="w-100 h-100"
                                    alt="..."
                                />
                            </div>
                            <div className="col-8">
                                <div className="card-body p-0 ps-2">
                                    <p className="card-text m-0">
                                        Cây Kim Ngân hợp với tuổi nào ?
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src="./img/clock.png" alt="" />
                                            <span>
                                                <i>28/6/2016</i>
                                            </span>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/tintuc">
                    <div className="card">
                        <div className="row g-0 p-2">
                            <div className="img col-4">
                                <img
                                    src="./img/tin04.png"
                                    className="w-100 h-100"
                                    alt="..."
                                />
                            </div>
                            <div className="col-8">
                                <div className="card-body p-0 ps-2">
                                    <p className="card-text m-0">
                                        Cây Kim Ngân hợp với tuổi nào ?
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src="./img/clock.png" alt="" />
                                            <span>
                                                <i>28/6/2016</i>
                                            </span>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HotNews
