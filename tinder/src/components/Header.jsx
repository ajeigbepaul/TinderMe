import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon />
        </IconButton>
      )}

      <Link to="/">
        <div className="header__img">
          {/* had an issue with displaying images on a params route. This was how i solved it. add a "/" to the image.png */}
          <img src="/tinder.png" alt="logo" />
        </div>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
