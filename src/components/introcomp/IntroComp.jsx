import React from "react";
import Ytplayer from "../ytPlayer/Ytplayer";
import "./introcomp.css";
import { Button } from "react-bootstrap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function IntroComp() {
  return (
    <div className="introItems">
      <h3 className="introheading">
        Everyday Makeup Using Dupes of High End Favorites
      </h3>
      <Ytplayer />
      <Button id="wpbtn">
        <WhatsAppIcon /> Save Post on Whatsapp
      </Button>
    </div>
  );
}

export default IntroComp;
