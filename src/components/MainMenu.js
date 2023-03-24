import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <div>
            <div className="main-menu">
                <div className="container px-0">
                    <div className="row">
                        <div className="list-item col-3 d-flex align-items-center">
                            <button
                                className="list-btn ps-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#list">
                                <i className="fa fa-bars" style={{ color: "white" }} />
                                <b className="ps-2">DANH MỤC SẢN PHẨM</b>
                            </button>
                        </div>
                        {/* menu */}
                        <div className="menu col-12 col-lg-9">
                            <ul className="nav justify-content-between flex-nowrap">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        <b>TRANG CHỦ</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gioithieu">
                                        <b>GIỚI THIỆU</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sanpham">
                                        <b>SẢN PHẨM</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <b>DỊCH VỤ</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <b>HỖ TRỢ KHÁCH HÀNG</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tintuc">
                                        <b>TIN TỨC</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/lienhe">
                                        <b>LIÊN HỆ</b>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu
