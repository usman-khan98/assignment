import React from "react";
import "react-circular-progressbar/dist/styles.css";
import "./add.css"
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Add() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [password, setPass] = useState();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    const data = {
        name1: name,
        email1: email,
        phone1: phone,
        password1: password,
        age1: age,
    }
    const sendData = await axios.post(
      "/addUser", data
    );
    console.log("result....", sendData.data);
    console.log("message: ", sendData.data.message);
    if (sendData.data.message) {
      alert("User Already Exists");
    } else {
      alert("User Successfully Registered");
    }

    navigate("/viewUsers");
  };

  return (
    <div className="formContainer">
      <div className="image">
        <h1
          style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: 50,
            marginTop: "50%",
          }}
        >
          <HowToRegOutlinedIcon
            style={{ padding: "10px", color: "crimson", fontSize: "75px" }}
          />
          Add User
        </h1>
      </div>
      <div className="inputs">
        <form action="" style={{ padding: "25px" }}>
          <div className="delInp">
            <AccountBoxOutlinedIcon className="icon2" />
            <TextField
              id="fullwidth"
              label="Full Name"
              placeholder="Enter Name"
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "500px",
              }}
            />
          </div>
          <div className="delInp">
            <MailOutlineOutlinedIcon className="icon2" />
            <TextField
              id="outlined-name fullwidth"
              required={true}
              label="Email"
              placeholder="Enter Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "500px",
              }}
            />
          </div>
          <div className="delInp">
            <HomeOutlinedIcon className="icon2" />
            <TextField
              type="number"
              required={true}
              id="outlined-name fullwidth"
              placeholder="Enter age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "500px",
              }}
            />
          </div>
          <div className="delInp">
            <LocalPhoneOutlinedIcon className="icon2" />
            <TextField
              id="outlined-name fullwidth"
              required={true}
              label="Phone"
              placeholder="Enter Phone"
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "500px",
              }}
            />
          </div>
          <div className="delInp">
            <VpnKeyOutlinedIcon className="icon2" />
            <TextField
              id="outlined-name fullwidth"
              required={true}
              label="Password"
              placeholder=""
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                width: "500px",
              }}
            />
          </div>
          <Button
            onClick={handleRegister}
            variant="contained"
            color="error"
            style={{ marginLeft: "50px", width: "50%", height: "50px" }}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
