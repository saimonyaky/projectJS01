import React from 'react'
import { Link } from 'react-router-dom'

const MenuContactTop = () => {
    return (
        <div className="menu-contact">
            <div className="container ">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <div className="hotline">
                            <img src="./img/phone.png" alt="" />
                            <span>
                                Hotline: <b>0123 456 789</b>
                            </span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link" to="#">
                            <img src="./img/f.png" alt="" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            <img src="./img/t.png" alt="" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            <img src="./img/g+.png" alt="" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            <img src="./img/y.png" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuContactTop
