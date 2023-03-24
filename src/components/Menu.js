import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="menu-web d-flex align-items-center">
                        <ul className="nav justify-content-between flex-nowrap">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gioithieu">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sanpham">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Dịch vụ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Hỗ trợ khách hàng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tintuc">
                                    Tin tức
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lienhe">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-contact">
                        <div className=" d-flex align-items-center">
                            <div className="p-lg-2">
                                <p className="m-0">Kết nối với chúng tôi:</p>
                            </div>
                            <div className="p-lg-2">
                                <Link to="https://www.facebook.com/Buoidienchinhhieu.vn/">
                                    <img src="./img/fb2.png" alt="" />
                                </Link>
                            </div>
                            <div className="p-lg-2">
                                <Link to="#">
                                    <img src="./img/tw2.png" alt="" />
                                </Link>
                            </div>
                            <div className="p-lg-2">
                                <Link to="#">
                                    <img src="./img/G+2.png" alt="" />
                                </Link>
                            </div>
                            <div className="p-lg-2">
                                <Link to="#">
                                    <img src="./img/yt2.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
