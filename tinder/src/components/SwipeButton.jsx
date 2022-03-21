import React from "react";
import "./Swipebutton.css";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButton() {
  return (
    <div className="swipebutton">
      <IconButton className="swipebutton__repeat">
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
