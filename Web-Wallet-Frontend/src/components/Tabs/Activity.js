import Box from "@mui/material/Box";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import round from "../../assets/round.png";
import right from "../../assets/right.png";

const Activity = () => {
  const navigate = useNavigate();

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    console.log("Closing the dialog");
    setPopupOpen(false);
    console.log("closed");
  };

  useEffect(() => {}, [isPopupOpen]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    

    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px", // Add left margin for spacing
          marginTop: "10px", // Add top margin for spacing
        }}
      >
        <p style={{ marginLeft: "10px" }}>{formattedDate}</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px", // Add left margin for spacing
          marginTop: "0px", // Add top margin for spacing
          cursor: "pointer",
        }}
        onClick={openPopup}
      >
        <ArrowDownwardIcon />
        <h4>Received</h4> <p style={{ marginLeft: "550px" }}>0.08456611 ETH</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px", // Add left margin for spacing
          marginTop: "0px", // Add top margin for spacing
          cursor: "pointer", // Add a pointer cursor to indicate clickability
        }}
        onClick={openPopup}
      >
        <ArrowUpwardIcon />
        <h4>Sent</h4>
        <p style={{ marginLeft: "585px" }}>2.08456221 ETH</p>
      </Box>
      <Dialog
          open={isPopupOpen}
          onClose={closePopup}
          sx={{ width: "400px", margin: "auto" }}
        >
          <DialogTitle>
            Receive
           
          </DialogTitle>
          <IconButton
          aria-label="close"
          onClick={closePopup}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          <DialogContent sx={{ width: "330px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Status</p>
              <p>
                <a href='your-link-here' style={{ color: "blue" }}>
                  View on explorer
                </a>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "green" }}>Confirmed</p>
              <p style={{ color: "blue" }}>Copy transaction ID</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>From</p>
              <p style={{ color: "black" }}>To</p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-22px",
              }}
            >
              <img
                src={round}
                alt='Image Description'
                style={{ width: "23px", height: "23px", marginLeft: "1px" }}
              />
              <p style={{ color: "black", marginLeft: "10px" }}>0x..fc5</p>
              <img
                src={right}
                alt='Image Description'
                style={{ width: "33px", height: "33px", marginLeft: "40px" }}
              />
              <img
                src={round}
                alt='Image Description'
                style={{ width: "23px", height: "23px", marginLeft: "50px" }}
              />
              <p style={{ color: "black", marginLeft: "10px" }}>0x..vg7</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-18px",
              }}
            >
              <h4 style={{ color: "black" }}>Transaction</h4>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>Nonce</p>
              <p style={{ color: "black" }}>11</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>Amount</p>
              <p style={{ color: "black" }}>0.08456611 ETH</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>Gas Limit (Units)</p>
              <p style={{ color: "black" }}>21000</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>Gas price</p>
              <p style={{ color: "black" }}>1.500160562</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-28px",
              }}
            >
              <p style={{ color: "black" }}>Total</p>
              <p style={{ color: "black" }}>0.08459761 ETH</p>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
};
export default Activity;
