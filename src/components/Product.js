import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <>
            {/* mid */}
            <main className="product">
                <div className="container ">
                    <div className="banner">
                        <div className="row">
                            <div >
                                {/* list */}
                            </div>
                            <div >
                                {/* direct */}
                                <div className="direct">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-2">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Trang chủ</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="/sanpham">Sản phẩm</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Chi tiết sản phẩm
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introduce">
                        <div className="d-flex">
                            {/* slide */}
                            <div className="col-5">
                                <section className="slide-ctsp">
                                    <div className="slider-for">
                                        <div>
                                            <img src="../img/spct01.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="../img/spct02.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="../img/spct03.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="../img/spct04.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="slider-nav">
                                        <div className="slide-img selected">
                                            <img src="../img/spct01.png" alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <img src="../img/spct02.png" alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <img src="../img/spct03.png" alt="" />
                                        </div>
                                        <div className="slide-img">
                                            <img src="../img/spct04.png" alt="" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* des */}
                            <div className="col-7">
                                <div className="title">
                                    <h4>Cây kim ngân</h4>
                                    <ul>
                                        <li>
                                            <b>Mã sản phẩm:</b>
                                        </li>
                                        <li>
                                            <b>Tình trạng:</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info">
                                    <table>
                                        <tbody>
                                            <tr className="title">
                                                <td>Giá bán:</td>
                                                <td>Số lượng:</td>
                                            </tr>
                                            <tr>
                                                <td className="price pe-4">
                                                    <h3>
                                                        <b>159,000 đ</b>
                                                    </h3>
                                                </td>
                                                <td className="pe-3">
                                                    <input type="number" defaultValue={1} min={1} />
                                                </td>
                                                <td>
                                                    <button type="submit">
                                                        <i className="fas fa-shopping-cart px-2" />
                                                        <b className="pe-2">ĐẶT HÀNG</b>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="des">
                                    <p>
                                        <b>MÔ TẢ NGẮN</b>
                                    </p>
                                    <p>
                                        Cây kim ngân hay còn gọi là cây thắt bím, cây bím tóc phù hợp
                                        với gia chủ muốn mua cây đặt ở phòng khách, phòng hội họp, văn
                                        phòng công sở, nhà hàng, khách sạn, hoặc dùng làm quà tặng trong
                                        những dịp mừng lễ, tết, thăng chức, khai trương. Các cây nhỏ có
                                        thể để bàn ngoài tác dụng đem lại tài lộc nó lại còn có thể đuổi
                                        muỗi.
                                    </p>
                                </div>
                                <div>
                                    <p>Tags: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <button className="nav-link active">
                                            <b>THÔNG TIN SẢN PHẨM</b>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link">
                                            <b>ĐÁNH GIÁ</b>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body active">
                                <p className="card-text">
                                    Cây kim ngân có tên khoa học là Pachira aquatica, xuất xứ từ
                                    Mexico. Brazill Nam Mỹ và đầm lầy Trung Mỹ. Đối với người tây
                                    phương thì họ gọi cây kim ngân là money tree có nghĩa là cây ăn,
                                    có thể chính vì lý do đó mà nó nhanh chóng phát triển và được đưa
                                    đến Việt Nam để làm cây cảnh văn phòng hoặc trang trí trong nhà.
                                    Với ý nghĩa khi gia chủ sở hữu cây kim ngân sẽ có nhiều tiền vàng,
                                    sự may mắn và thịnh vượng. Ngoài ra kim ngân còncó các tên khác
                                    như cây thắt bim và một tác dụng nữa mà ít người biết đến chính là
                                    nó có thể đuổi muỗi.
                                </p>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <b>Đặc điểm của cây kim ngân</b>
                                                </h5>
                                                <p className="card-text">
                                                    Kim ngân có thể cao được hơn 6m, thân dẻo dai, bền chắc. Ở
                                                    bên Anh và Mỹ nó được dùng để làm bột giấy để in tiền. Lá
                                                    kim ngân xòe rộng như bàn tay, xanh quanh năm. Một số tài
                                                    liệu ghi chép thì cây nở hoa từ tháng 4 đến tháng 11. Hoa
                                                    gồm những cánh lớn màu kem nhạt, nở về đêm và toả hương
                                                    thoang thoảng, đài hoa màu nâu nhạt hình bầu dục với 5
                                                    cánh màu xanh vàng, dài 15cm. Quả kim ngân có hình trứng,
                                                    đường kính khoảng 10cm. Khi chín quả có màu nâu nhạt. Quả
                                                    khô nứt dụng ra khoảng 10 - 20 hạt. Tuy nhiên có thể ở mỗi
                                                    trường và điều kiện không phù hợp mà rất hiếm khi thấy kim
                                                    ngân nở hoa
                                                </p>
                                                <p className="card-text">
                                                    Cây kim ngân còn được gọi là cây thắt bím hay bím tóc vì ở
                                                    giai đoạn cây con, người ta trồng chung từ 3 - 5 cây vào
                                                    một chỗ rồi đan thắt như một cái bím tóc trông rất ngộ
                                                    nghĩnh. Một chậu kim ngân nhỏ xinh có thể để trên bàn làm
                                                    việc, quầy thu ngân, hoặc gắn lên đó chiếc nơ trang trí,
                                                    sẽ trở thành món quà sinh nhật để tặng cho người thân.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img src="../img/ttsp01.png" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <img
                                                src="../img/ttsp02.png"
                                                alt="..."
                                                className="img-fluid rounded-start"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <b>Cách chăm sóc và ý nghĩa của cây kim ngân</b>
                                                </h5>
                                                <p className="card-text">
                                                    <b>Nhiệt độ:</b>
                                                    <br />
                                                    Cây sống được ở nhiệt độ từ 4°C đến 40°C phát triển thích
                                                    hợp ở nhiệt độ 18°C đến 26°C. Như vậy đối với cây được
                                                    trồng trong nhà hoặc trồng trong phòng lạnh cây vẫn sinh
                                                    trưởng bình thường. Tuy nhiên để cây tồn tại lâu cần phải
                                                    điều chỉnh nhiệt độ phù hợp.
                                                </p>
                                                <p className="card-text">
                                                    <b>Ánh sáng:</b>
                                                    <br />
                                                    Cây đặt trong nhà với ánh sáng của đèn huỳnh quang thì cây
                                                    vẫn đáp ứng được với điều kiện sinh trưởng và phát triển.
                                                    nhiên để cây phát triển tốt, thình thoảng ta nên đưa cây
                                                    ra ngoài trời dưới tán cây lớn với chu kỳ 10 ngày/lần, như
                                                    vậy cây sẽ hấp thụ được ánh sáng và phát triển tốt hơn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        {/* img-title */}
                        <div className="img-title">
                            <div className="d-flex">
                                <div className="justify-content-start bg-green tree">
                                    <img src="../img/cay.png" alt="" />
                                </div>
                                <div className="bg-green content p-2">
                                    <b>Sản phẩm liên quan</b>
                                </div>
                                <div className="icon flex-grow-1 bg-gray">
                                    <img src="../img/icon_section1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* slide */}
                        <div className="slide">
                            <section >
                                <div className="autoplay">
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img src="../img/Cay-kim-tien.png"  alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Kim Tiền</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img
                                                    src="../img/Cay-van-nien-thanh.png"
                                                    
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Vạn Thiên Thanh</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img
                                                    src="../img/Cay-thuong-xuan.png"
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
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img src="../img/Cay-canh-dep.png"  alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây cảnh đẹp</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sp">
                                        <div className="card px-1">
                                            <img src="../img/Cay-kim-tien.png"  alt="..." />
                                            <div className="card-body">
                                                <p className="card-text name">Cây Kim Tiền</p>
                                                <p className="card-text price">1.810.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img
                                                    src="../img/Cay-van-nien-thanh.png"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Vạn Thiên Thanh</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img
                                                    src="../img/Cay-thuong-xuan.png"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây Thường Xuân</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sp">
                                        <Link href="/sanpham/chitietsanpham">
                                            <div className="card px-1">
                                                <img src="../img/Cay-canh-dep.png"  alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text name">Cây cảnh đẹp</p>
                                                    <p className="card-text price">1.810.000đ</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <script src="js/jquery-3.6.1.min.js"></script>
            <script src="bootstrap-5.2.2-dist/js/bootstrap.min.js"></script>
            <script src="slick-1.8.1/slick/slick.min.js"></script>
            <script src="js/script.js"></script>
        </>
    )
}

export default Product
