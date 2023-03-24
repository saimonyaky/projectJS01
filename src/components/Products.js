import React from 'react'
import { Link } from 'react-router-dom'
import HotNews from './HotNews'
import ListMenu from './ListMenu'

const Products = () => {
    return (
        <>
            {/* mid */}
            <main className="products">
                <div className="container p-0">
                    <div className="banner">
                        <div className="row">
                            <div className="col-3">
                                {/* list */}
                                <ListMenu />
                            </div>
                            <div className="col-lg-9 col-12 ps-0">
                                {/* direct */}
                                <div className="direct">
                                    <nav style={{}} aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-2">
                                            <li className="breadcrumb-item">
                                                <a href="./index.html">Trang chủ</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Sản phẩm
                                            </li>
                                        </ol>
                                    </nav>

                                </div>
                                {/* banner */}
                                <div className="banner-img">
                                    <img src="./img/gioithieu.png" className="w-100 h-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="row">
                            <div className="col-3">
                                {/* HotNews */}
                                <HotNews/>
                            </div>
                            <div className="col-lg-9 ps-0">
                                <div className="main-content">
                                    <div>
                                        {/* img-title */}
                                        <div className="img-title">
                                            <div className="d-flex">
                                                <div className="justify-content-start bg-green tree">
                                                    <img src="./img/cay.png" alt="" />
                                                </div>
                                                <div className="bg-green content p-2">
                                                    <b>Cây trang trí trong nhà</b>
                                                </div>
                                                <div className="icon flex-grow-1 bg-gray">
                                                    <img src="./img/icon_section1.png" alt="" />
                                                </div>
                                                <div className="bg-gray justify-content-end p-2">
                                                    <Link to="/sanpham">
                                                        <span>Xem tất cả</span>
                                                        <img src="./img/arrow-btn.png" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="row d-flex justify-content-between py-3">
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sen-da-1.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây Sen Đá Đất Trắng</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sedun.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sendum hoa hồng</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/sen-da-2.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sen đá 3 màu</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sen-da-3.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sen đá bông hồng đen</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* img-title */}
                                        <div className="img-title">
                                            <div className="d-flex">
                                                <div className="justify-content-start bg-green tree">
                                                    <img src="./img/cay.png" alt="" />
                                                </div>
                                                <div className="bg-green content p-2">
                                                    <b>Cây trang trí sân vườn</b>
                                                </div>
                                                <div className="icon flex-grow-1 bg-gray">
                                                    <img src="./img/icon_section1.png" alt="" />
                                                </div>
                                                <div className="bg-gray justify-content-end p-2">
                                                    <Link to="/sanpham">
                                                        <span>Xem tất cả</span>
                                                        <img src="./img/arrow-btn.png" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="row d-flex justify-content-between py-3">
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sen-da-4.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây Sen Đá Đất Trắng</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sen-da-5.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sendum hoa hồng</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/sen-da-6.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sen đá 3 màu</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img src="./img/sen-da-7.png" className="" alt="..." />
                                                        <div className="card-body">
                                                            <p className="card-text name">Sen đá bông hồng đen</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* img-title */}
                                        <div className="img-title">
                                            <div className="d-flex">
                                                <div className="justify-content-start bg-green tree">
                                                    <img src="./img/cay.png" alt="" />
                                                </div>
                                                <div className="bg-green content p-2">
                                                    <b>Cây phong thủy</b>
                                                </div>
                                                <div className="icon flex-grow-1 bg-gray">
                                                    <img src="./img/icon_section1.png" alt="" />
                                                </div>
                                                <div className="bg-gray justify-content-end p-2">
                                                    <Link to="/sanpham">
                                                        <span>Xem tất cả</span>
                                                        <img src="./img/arrow-btn.png" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="row d-flex justify-content-between py-3">
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/Cay-kim-tien.png"
                                                            className=""
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây Kim Tiền</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/Cay-van-nien-thanh.png"
                                                            className=""
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây Vạn Thiên Thanh</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/Cay-thuong-xuan.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây Thường Xuân</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                                <Link to="/sanpham/chitietsanpham">
                                                    <div className="card px-1">
                                                        <img
                                                            src="./img/Cay-canh-dep.png"
                                                            className=""
                                                            alt="..."
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text name">Cây cảnh đẹp</p>
                                                            <p className="card-text price">1.810.000đ</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Products