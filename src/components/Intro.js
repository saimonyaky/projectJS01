import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div>
            <div className="intro">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link className="nav-link" to="/">
                                <img src="./img/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="search d-flex align-items-center justify-content-between flex-nowrap">
                            <ul className="nav ">
                                <li className="d-flex" role="search">
                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Tìm kiếm"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        <i className="fa fa-search" />
                                    </button>
                                </li>
                                <li className="nav-item d-flex ps-4">
                                    <div className="pe-2">
                                        <img src="./img/hand1.png" alt="" />
                                    </div>
                                    <div className="doc">
                                        <span>
                                            CAM KẾT CHÂT LƯỢNG
                                            <br />
                                            SẢN PHẨM DỊCH VỤ
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item d-flex ps-4">
                                    <div className="pe-2 align-items-end">
                                        <img src="./img/hand2.png" alt="" />
                                    </div>
                                    <div className="doc">
                                        <span>
                                            VẬN CHUYỂN NỘI THÀNH
                                            <br />
                                            MIỄN PHÍ
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
