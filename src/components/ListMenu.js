import React from 'react'
import { Link } from 'react-router-dom'

const ListMenu = () => {
    return (
        <div className="collapse list show" id="list">
            <div id="list-example" className="list-group">
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Cây trang trí trong nhà</span>
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Cây trang trí sân vườn</span>
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Cây phong thủy</span>
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Cây cổ thụ</span>
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Cây bóng mát</span>
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/sanpham"
                >
                    <img src="./img/icon_mnuL.png" alt="" />
                    <span className="ps-2">Dịch vụ vật tư</span>
                </Link>
            </div>
        </div>
    )
}

export default ListMenu
