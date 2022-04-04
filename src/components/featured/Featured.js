import "./featured.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$450</p>
        <p className="desc">
          Previous transaction processing. Last payment may not be included.{" "}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
