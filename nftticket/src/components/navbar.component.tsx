/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FileCoinLogo, Logo, NIUMLogo, userAvatar } from '../assets'
import { useStateContext } from '../context'
import "./navbar.component.css"

const NavbarComponent = () => {

    const { address, contract, connect, activePage } = useStateContext();
    const navigate = useNavigate();
    const ProfileArea = () => {
        return (
            (!address) ?
                <button className="btn-connect" onClick={() => connect()}>Connect</button>
                :
                <div className="profile-section">
                    {/* <img src={userAvatar} /> */}
                    <div className="profile-desc">
                        <span style={{ fontWeight: 700 }}>ADDRESS</span>
                        {`${address.slice(0, 5)}...${address.slice(-5,)}`}
                    </div>
                </div>
        )
    }
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={NIUMLogo} onClick={() => navigate("./")} />
                <div className="nav-links">
                    <li onClick={() => navigate("./")} className={activePage === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => navigate("./tickets")} className={activePage === "yourtickets" ? "active" : ""}>Your Tickets</li>
                    <li className={activePage === "recenttickets" ? "active" : ""} onClick={() => window.location.href = "https://mumbai.polygonscan.com/address/0xe369423ea9f02b201f179e64e2298b4e2f6937f0"}>Polygon Mumbai Scan</li>
                </div>
            </div>
            <div className="walletArea">
                {ProfileArea()}
            </div>
        </div>
    )
}

export default NavbarComponent
