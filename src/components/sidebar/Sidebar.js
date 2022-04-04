import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkMoodContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ImranAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="products" style={{ textDecoration: "none" }}>
            <li>
              <MonetizationOnIcon className="icon" />

              <span>Products</span>
            </li>
          </Link>

          <li>
            <ViewStreamIcon className="icon" />

            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <FaceIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
