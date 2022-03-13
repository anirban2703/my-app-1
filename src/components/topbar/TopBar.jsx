import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./topbar.css";
import Image from "react-bootstrap/Image";

function TopBar() {
  return (
    <div className="topbar">
      <i className="topbarIcon">
        <ArrowBackIosIcon sx={{ fontSize: 20 }} />
      </i>

      <div className="topbarheading">
        <Image
          src="https://1.bp.blogspot.com/-Z_bNzivncvQ/YP_hcsjK6iI/AAAAAAAABGQ/OOE0G97wuMIXAk60dZmTHnbh79cAXSAmACLcBGAsYHQ/s475/dp-images-girl.png"
          className="topbarImg"
        />
        Lorem
      </div>
    </div>
  );
}

export default TopBar;
