import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 map">
                        <img src="./img/gg-map.png" className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <b>NHÀ VƯỜN VÂN THỦY</b>
                        </p>
                        <div className="direct">
                            <p className="m-0">
                                <img src="./img/point.png" alt="" />
                                <span>
                                    Địa chỉ: Đường Phú Minh, Văn Trì, Minh Khai, Bắc Từ Liêm Hà
                                    Nội.
                                </span>
                            </p>
                            <p className="m-0">
                                <img src="./img/small-phone.png" alt="" />
                                <span>
                                    Hotline: 093 6596 425 (Mrs.Thủy)-097 6885 796(Mr.Lâm)
                                </span>
                            </p>
                            <p className="m-0">
                                <img src="./img/mail.png" alt="" />
                                <span>Email: buoidienvn@gmail.com</span>
                            </p>
                            <p className="m-0">
                                <img src="./img/website.png" alt="" />
                                <span>Website: buoidienvn</span>
                            </p>
                            <p className="m-0">
                                <img src="./img/ban-quyen.png" alt="" />
                                <span>
                                    Copyright © 2013. Bản quyền thuộc về Nhà Vườn Vân Thủy.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
