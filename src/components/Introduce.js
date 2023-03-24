import React from 'react'
import { Link } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import HotNews from './HotNews'
import ListMenu from './ListMenu'
import Menu from './Menu'

const Introduce = () => {
    return (
        <>
            {/* mid */}
            <main className="introduce">
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
                                                <Link to="/">Trang chủ</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Giới thiệu
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
                                <div className="content">
                                    {/* img-title */}
                                    <div className="img-title">
                                        <div className="d-flex">
                                            <div className="justify-content-start bg-green tree">
                                                <img src="./img/cay.png" alt="" />
                                            </div>
                                            <div className="bg-green content p-2">
                                                <b>Giới thiệu</b>
                                            </div>
                                            <div className="icon flex-grow-1 bg-gray">
                                                <img src="./img/icon_section1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* main-content */}
                                    <div className="main-content">
                                        Nhà vườn Vân Thủy chúng tôi có bề dày lâu năm xây dựng và phát
                                        triển. Chúng tôi bắt đầu sản xuất, cung ứng các loại cây ăn quả,
                                        cây bóng mát từ năm 1995. Trải qua quá trình xây dựng và trưởng
                                        thành, chúng tôi đã tích lũy được nhiều kinh nghiệm trong lĩnh
                                        vực nông nghiệp. Năm 2001, nhà vườn Văn Thủy đã đi tiên phong
                                        chuyển cây bưởi Diễn và cây cam Canh, là những đặc sản địa
                                        phương trồng lên trên chậu làm cây cảnh. Với phương châm luôn
                                        luôn tìm tòi sáng tạo, sản phẩm của chúng tôi đã có mặt tại
                                        nhiều địa phương trong cả nước từ miền Bắc đến miền Trung và cả
                                        Nam Bộ. Khách hàng luôn yên tâm về chất lượng sản phẩm của chúng
                                        tôi. Đó chính là lý do vì sao nhà vườn Văn Thủy luôn phát triển
                                        trong gần 20 năm qua.
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

export default Introduce
