import React from 'react'
import { Link } from 'react-router-dom'
import HotNews from './HotNews'
import ListMenu from './ListMenu'

const News = () => {
    return (
        <>
            {/* mid */}
            <main className="news">
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
                                                Tin tức
                                            </li>
                                        </ol>
                                    </nav>

                                </div>
                                {/* banner */}
                                <div className="banner-img">
                                    <img src="./img/tin tuc.png" className="w-100 h-100" alt="" />
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
                                                <b>Tin tức</b>
                                            </div>
                                            <div className="icon flex-grow-1 bg-gray">
                                                <img src="./img/icon_section1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* main-content */}
                                    <div className="main-content">
                                        <Link href="/tintuc">
                                            <div className="card">
                                                <div className="row g-0 py-4">
                                                    <div className="img col-4">
                                                        <img
                                                            src="./img/tin05.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body p-0 ps-2">
                                                            <p className="card-text m-0">
                                                                <b>Tác dụng của cây lưỡi hổ trong chữa bệnh</b>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                <small className="text-muted">
                                                                    <img src="./img/clock.png" alt="" />
                                                                    <span>
                                                                        <i>28/6/2016</i>
                                                                    </span>
                                                                </small>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                Cây Lưỡi Hổ có tác dụng thanh lọc không khí, hấp thụ
                                                                chất gây ô nhiễm, cải thiện không gian sống vào ban
                                                                đêm cây nhà oxi nên rất phù hợp để phòng ngủ. Cây
                                                                mang ý nghĩa phong thủy trừ tà xua đuổi ma quỹ,
                                                                chống lại sự bỏ bùa để đem lại may mắn và tài lộc
                                                                cho gia chủ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="/tintuc">
                                            <div className="card">
                                                <div className="row g-0 py-4">
                                                    <div className="img col-4">
                                                        <img
                                                            src="./img/tin05.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body p-0 ps-2">
                                                            <p className="card-text m-0">
                                                                <b>Tác dụng của cây lưỡi hổ trong chữa bệnh</b>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                <small className="text-muted">
                                                                    <img src="./img/clock.png" alt="" />
                                                                    <span>
                                                                        <i>28/6/2016</i>
                                                                    </span>
                                                                </small>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                Cây Lưỡi Hổ có tác dụng thanh lọc không khí, hấp thụ
                                                                chất gây ô nhiễm, cải thiện không gian sống vào ban
                                                                đêm cây nhà oxi nên rất phù hợp để phòng ngủ. Cây
                                                                mang ý nghĩa phong thủy trừ tà xua đuổi ma quỹ,
                                                                chống lại sự bỏ bùa để đem lại may mắn và tài lộc
                                                                cho gia chủ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="/tintuc">
                                            <div className="card">
                                                <div className="row g-0 py-4">
                                                    <div className="img col-4">
                                                        <img
                                                            src="./img/tin05.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body p-0 ps-2">
                                                            <p className="card-text m-0">
                                                                <b>Tác dụng của cây lưỡi hổ trong chữa bệnh</b>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                <small className="text-muted">
                                                                    <img src="./img/clock.png" alt="" />
                                                                    <span>
                                                                        <i>28/6/2016</i>
                                                                    </span>
                                                                </small>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                Cây Lưỡi Hổ có tác dụng thanh lọc không khí, hấp thụ
                                                                chất gây ô nhiễm, cải thiện không gian sống vào ban
                                                                đêm cây nhà oxi nên rất phù hợp để phòng ngủ. Cây
                                                                mang ý nghĩa phong thủy trừ tà xua đuổi ma quỹ,
                                                                chống lại sự bỏ bùa để đem lại may mắn và tài lộc
                                                                cho gia chủ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="/tintuc">
                                            <div className="card">
                                                <div className="row g-0 py-4">
                                                    <div className="img col-4">
                                                        <img
                                                            src="./img/tin05.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body p-0 ps-2">
                                                            <p className="card-text m-0">
                                                                <b>Tác dụng của cây lưỡi hổ trong chữa bệnh</b>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                <small className="text-muted">
                                                                    <img src="./img/clock.png" alt="" />
                                                                    <span>
                                                                        <i>28/6/2016</i>
                                                                    </span>
                                                                </small>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                Cây Lưỡi Hổ có tác dụng thanh lọc không khí, hấp thụ
                                                                chất gây ô nhiễm, cải thiện không gian sống vào ban
                                                                đêm cây nhà oxi nên rất phù hợp để phòng ngủ. Cây
                                                                mang ý nghĩa phong thủy trừ tà xua đuổi ma quỹ,
                                                                chống lại sự bỏ bùa để đem lại may mắn và tài lộc
                                                                cho gia chủ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="/tintuc">
                                            <div className="card">
                                                <div className="row g-0 py-4">
                                                    <div className="img col-4">
                                                        <img
                                                            src="./img/tin05.png"
                                                            className="w-100 h-100"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body p-0 ps-2">
                                                            <p className="card-text m-0">
                                                                <b>Tác dụng của cây lưỡi hổ trong chữa bệnh</b>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                <small className="text-muted">
                                                                    <img src="./img/clock.png" alt="" />
                                                                    <span>
                                                                        <i>28/6/2016</i>
                                                                    </span>
                                                                </small>
                                                            </p>
                                                            <p className="card-text text-content">
                                                                Cây Lưỡi Hổ có tác dụng thanh lọc không khí, hấp thụ
                                                                chất gây ô nhiễm, cải thiện không gian sống vào ban
                                                                đêm cây nhà oxi nên rất phù hợp để phòng ngủ. Cây
                                                                mang ý nghĩa phong thủy trừ tà xua đuổi ma quỹ,
                                                                chống lại sự bỏ bùa để đem lại may mắn và tài lộc
                                                                cho gia chủ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default News
