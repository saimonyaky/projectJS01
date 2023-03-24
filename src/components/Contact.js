import React from 'react'
import ContactInfo from './ContactInfo'
import HotNews from './HotNews'
import ListMenu from './ListMenu'
import Menu from './Menu'

const Contact = () => {
    return (
        <>
            {/* mid */}
            <main className="contact">
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
                                                Liên hệ
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* banner */}
                                <div className="banner-img">
                                    <img src="./img/lien he.png" className="w-100" alt="" />
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
                                                <b>Liên hệ</b>
                                            </div>
                                            <div className="icon flex-grow-1 bg-gray">
                                                <img src="./img/icon_section1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* main-content */}
                                    <div className="main-content pb-2">
                                        <div className="row py-4">
                                            {/* info */}
                                            <div className="info col-lg-6">
                                                Mọi ý kiến đóng góp xin vui lòng điền vào Form dưới đây và
                                                gửi cho chúng tôi. Xin chân thành cảm ơn!
                                                <form action="">
                                                    <table className="w-100">
                                                        <tbody>
                                                            <tr>
                                                                <td>Họ tên</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">
                                                                            <i className="fas fa-address-book pe-1" />
                                                                        </span>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">
                                                                            <i
                                                                                className="far fa-envelope"
                                                                                style={{ fontSize: 18 }}
                                                                            />
                                                                        </span>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Địa chỉ</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">
                                                                            <i className="fas fa-home" />
                                                                        </span>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Điện thoại</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">
                                                                            <i className="fas fa-mobile-alt px-1" />
                                                                        </span>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tiêu đề</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <span className="input-group-text">
                                                                            <i className="far fa-edit" />
                                                                        </span>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nội dung</td>
                                                                <td>
                                                                    <div>
                                                                        <textarea
                                                                            className="form-control"
                                                                            rows={3}
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td />
                                                                <td>
                                                                    <button type="submit" className="bg-orange">
                                                                        <b>GỬI ĐI</b>
                                                                    </button>
                                                                    <button type="reset" className="bg-secondary">
                                                                        <b>NHẬP LẠI</b>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                            {/* des */}
                                            <div className="des col-lg-6 ps-4 align-content-center row bg-light">
                                                <div className="">
                                                    <img
                                                        src="./img/logo.png"
                                                        className="rounded mx-auto d-block"
                                                        alt=""
                                                    />
                                                    <h4 className="text-center">NHÀ VƯỜN VÂN THỦY</h4>
                                                    <p className="text-center">
                                                        Địa chỉ: Đường Phú Minh, Văn Trì, Minh Khai, Bắc Từ Liêm
                                                        Hà Nội.
                                                    </p>
                                                    <p className="text-center">
                                                        Hotline: 093 6596 425 (Mrs.Thủy)-097 6885 796(Mr.Lâm)
                                                    </p>
                                                    <p className="text-center">Email: buoidienvn@gmail.com</p>
                                                    <p className="text-center">Website: buoidienvn</p>
                                                </div>
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

export default Contact
