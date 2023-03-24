import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import ListMenu from './ListMenu'

const Home = () => {
    return (
        <>
            {/* mid */}
            <main className='index'>
                <div className="container p-0">
                    <div className="banner">
                        <div className="row">
                            <div className="col-3">
                                {/* list */}
                                <ListMenu/>
                            </div>
                            <div className="col-lg-9 col-12 ps-0">
                                {/* banner */}
                                <Banner/>
                            </div>
                        </div>
                    </div>
                    {/* sp ban chay */}
                    <div>
                        {/* img-title */}
                        <div className="img-title">
                            <div className="d-flex">
                                <div className="justify-content-start bg-green tree">
                                    <img src="./img/cay.png" alt="" />
                                </div>
                                <div className="bg-green content p-2">
                                    <b>Sản phẩm bán chạy</b>
                                </div>
                                <div className="icon flex-grow-1 bg-gray">
                                    <img src="./img/icon_section1.png" alt="" />
                                </div>
                                <div className="bg-gray justify-content-end p-2">
                                    <Link to="/sanpham" className="link">
                                        <span>Xem tất cả</span>
                                        <img src="./img/arrow-btn.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="content">
                            <div className="row">
                                <div className="col-3 decor">
                                    <img src="./img/sp-ban-chay.png" alt="" className="w-100 h-100" />
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="row d-flex justify-content-between">
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
                                        <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                            <div className="card px-1">
                                                <img src="./img/Cay-kim-tien.png" className="" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Kim Tiền</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
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
                                                        className=""
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
                    {/* Cay trang tri */}
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
                                    <Link to="/sanpham" className="link">
                                        <span>Xem tất cả</span>
                                        <img src="./img/arrow-btn.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="content">
                            <div className="row">
                                <div className="col-3 decor">
                                    <img
                                        src="./img/cay-trang-tri.png"
                                        alt=""
                                        className="w-100 h-100"
                                    />
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="row d-flex justify-content-between">
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
                            </div>
                        </div>
                    </div>
                    {/* Cay san vuon */}
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
                                    <Link to="/sanpham" className="link">
                                        <span>Xem tất cả</span>
                                        <img src="./img/arrow-btn.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="content">
                            <div className="row">
                                <div className="col-3 decor">
                                    <img
                                        src="./img/cay-san-vuon.png"
                                        alt=""
                                        className="w-100 h-100"
                                    />
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="row d-flex justify-content-between">
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
                            </div>
                        </div>
                    </div>
                    {/* Cay phong thuy */}
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
                                    <Link to="/sanpham"className="link">
                                        <span>Xem tất cả</span>
                                        <img src="./img/arrow-btn.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="content">
                            <div className="row">
                                <div className="col-3 decor">
                                    <img
                                        src="./img/Cay-phong-thuy.png"
                                        alt=""
                                        className="w-100 h-100"
                                    />
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="row d-flex justify-content-between">
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
                                        <div className="col-xl-3 col-md-4 col-sm-6 sp">
                                            <div className="card px-1">
                                                <img src="./img/Cay-kim-tien.png" className="" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Kim Tiền</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
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
                                                        className=""
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
                {/* news */}
                <div className="news">
                    <div className="name">
                        <h4>
                            <b>TIN TỨC</b>
                        </h4>
                    </div>
                    <div className="container content">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-sm-6 col-12 col-6">
                                <Link to="./tintuc">
                                    <div className="card">
                                        <img src="./img/tin01.png" className="" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <b>Cây Kim Ngân hợp với tuổi nào ?</b>
                                            </p>
                                            <p className="card-text">
                                                <img src="./img/clock.png" alt="" />
                                                <span className="des">
                                                    <i>28/6/2016</i>
                                                </span>
                                            </p>
                                            <p className="card-text des">
                                                Cây Kim Ngân là một trong những cây hàng đầu về phong thủy.
                                                Cây Kim Ngân hay còn gọi là Cây Tiền mang đến cho gia chủ
                                                tiền vàng...
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link to="./tintuc">
                                    <div className="card ">
                                        <img src="./img/tin02.png" className="" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <b>Cây Kim Ngân hợp với tuổi nào ?</b>
                                            </p>
                                            <p className="card-text">
                                                <img src="./img/clock.png" alt="" />
                                                <span className="des">
                                                    <i>28/6/2016</i>
                                                </span>
                                            </p>
                                            <p className="card-text des">
                                                Cây Kim Ngân là một trong những cây hàng đầu về phong thủy.
                                                Cây Kim Ngân hay còn gọi là Cây Tiền mang đến cho gia chủ
                                                tiền vàng...
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link to="./tintuc">
                                    <div className="card">
                                        <img src="./img/tin03.png" className="" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <b>Cây Kim Ngân hợp với tuổi nào ?</b>
                                            </p>
                                            <p className="card-text">
                                                <img src="./img/clock.png" alt="" />
                                                <span className="des">
                                                    <i>28/6/2016</i>
                                                </span>
                                            </p>
                                            <p className="card-text des">
                                                Cây Kim Ngân là một trong những cây hàng đầu về phong thủy.
                                                Cây Kim Ngân hay còn gọi là Cây Tiền mang đến cho gia chủ
                                                tiền vàng...
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link to="./tintuc">
                                    <div className="card ">
                                        <img src="./img/tin04.png" className="" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <b>Cây Kim Ngân hợp với tuổi nào ?</b>
                                            </p>
                                            <p className="card-text">
                                                <img src="./img/clock.png" alt="" />
                                                <span className="des">
                                                    <i>28/6/2016</i>
                                                </span>
                                            </p>
                                            <p className="card-text des">
                                                Cây Kim Ngân là một trong những cây hàng đầu về phong thủy.
                                                Cây Kim Ngân hay còn gọi là Cây Tiền mang đến cho gia chủ
                                                tiền vàng...
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="more-btn">
                            <Link to="./tintuc">
                                <button type="button" className="btn btn-outline-success">
                                    <span>Xem thêm</span>
                                    <img src="./img/arrow-btn.png" alt="" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div className="comment">
                    <div className="name">
                        <h4>
                            <b>Ý KIẾN KHÁCH HÀNG</b>
                        </h4>
                    </div>
                    <section className="slide-cmt container">
                        <div>
                            <div id="message" className="">
                                <div className="message-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="d-flex align-items-stretch">
                                                    <i className="fas fa-quote-left" />
                                                </td>
                                                <td>
                                                    <p>
                                                        Mỗi loài hoa mang một thông điệp ý nghĩa mà bạn dành
                                                        tặng cho người thân. Hoa luạ Phương Thảo xin giới thiệu
                                                        ý nghĩa một số loài hoa thông dụng trong cuộc sống hằng
                                                        ngày tới các bạn. Hy vọng rằng nó sẽ giúp ích cho bạn
                                                        mỗi lần tặng hoa...
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="arrow">
                                    <div className="outer" />
                                    <div className="inner" />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="img col-3">
                                        <img src="./img/avt01.png" className="w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body p-0 ps-2">
                                            <p className="card-text m-0">Nguyễn Vân Anh</p>
                                            <p className="card-text">
                                                <small className="text-muted">Hà Nội</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="message" className="">
                                <div className="message-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="d-flex align-items-stretch">
                                                    <i className="fas fa-quote-left" />
                                                </td>
                                                <td>
                                                    <p>
                                                        Mỗi loài hoa mang một thông điệp ý nghĩa mà bạn dành
                                                        tặng cho người thân. Hoa luạ Phương Thảo xin giới thiệu
                                                        ý nghĩa một số loài hoa thông dụng trong cuộc sống hằng
                                                        ngày tới các bạn. Hy vọng rằng nó sẽ giúp ích cho bạn
                                                        mỗi lần tặng hoa...
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="arrow">
                                    <div className="outer" />
                                    <div className="inner" />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="img col-3">
                                        <img src="./img/avt01.png" className="w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body p-0 ps-2">
                                            <p className="card-text m-0">Nguyễn Vân Anh</p>
                                            <p className="card-text">
                                                <small className="text-muted">Hà Nội</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="message" className="">
                                <div className="message-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="d-flex align-items-stretch">
                                                    <i className="fas fa-quote-left" />
                                                </td>
                                                <td>
                                                    <p>
                                                        Mỗi loài hoa mang một thông điệp ý nghĩa mà bạn dành
                                                        tặng cho người thân. Hoa luạ Phương Thảo xin giới thiệu
                                                        ý nghĩa một số loài hoa thông dụng trong cuộc sống hằng
                                                        ngày tới các bạn. Hy vọng rằng nó sẽ giúp ích cho bạn
                                                        mỗi lần tặng hoa...
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="arrow">
                                    <div className="outer" />
                                    <div className="inner" />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="img col-3">
                                        <img src="./img/avt01.png" className="w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body p-0 ps-2">
                                            <p className="card-text m-0">Nguyễn Vân Anh</p>
                                            <p className="card-text">
                                                <small className="text-muted">Hà Nội</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="message" className="">
                                <div className="message-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="d-flex align-items-stretch">
                                                    <i className="fas fa-quote-left" />
                                                </td>
                                                <td>
                                                    <p>
                                                        Mỗi loài hoa mang một thông điệp ý nghĩa mà bạn dành
                                                        tặng cho người thân. Hoa luạ Phương Thảo xin giới thiệu
                                                        ý nghĩa một số loài hoa thông dụng trong cuộc sống hằng
                                                        ngày tới các bạn. Hy vọng rằng nó sẽ giúp ích cho bạn
                                                        mỗi lần tặng hoa...
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="arrow">
                                    <div className="outer" />
                                    <div className="inner" />
                                </div>
                            </div>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="img col-3">
                                        <img src="./img/avt01.png" className="w-100 h-100" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body p-0 ps-2">
                                            <p className="card-text m-0">Nguyễn Vân Anh</p>
                                            <p className="card-text">
                                                <small className="text-muted">Hà Nội</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <script src="js/jquery-3.6.1.min.js"></script>
            <script src="bootstrap-5.2.2-dist/js/bootstrap.min.js"></script>
            <script src="slick-1.8.1/slick/slick.min.js"></script>
            <script src="js/script.js"></script>
        </>
    )
}

export default Home
