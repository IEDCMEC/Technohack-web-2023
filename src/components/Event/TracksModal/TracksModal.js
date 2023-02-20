import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import "./TracksModal.css";
import { IoMdClose } from "react-icons/io";
import tracksmodal from "../../../assets/tracksmodal.svg";

function TracksModal({ open, handleClose, data }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth={true}
      disableScrollLock={true}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          width: "calc(100% - 32px)",
          backgroundColor: "#04364F",
          color: "#fff",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <div className="tracks-modal">
          <div className="tracks-modal-header">
            <div className="tracks-modal-header-left">
              <div className="tracks-modal-header-left-heading">
                {data.name} Track
              </div>

              {/* <div className="tracks-modal-left-sub">
                <div className="tracks-modal-left-sub-heading">
                  sponsored by
                </div>
                <img
                  src={data.sponsorlogo}
                  alt="lyminal"
                  className="tracks-modal-left-sub-image"
                />
              </div> */}
            </div>
            <IoMdClose onClick={handleClose} className="tracks-modal-close" />
          </div>
          <div className="tracks-modal-powered-by">powered by</div>
          <div className="tracks-modal-prize-section">
            <div>
              {" "}
              <img
                src={data.sponsorlogo}
                alt="lyminal"
                className="tracks-modal-left-sub-image"
              />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem"
            }}>
              {data.prizes.map((item, index) => {
                return (
                  <div className="tracks-modal-prize-card" key={index}>
                    <img
                      src={item.image}
                      alt="first"
                      className="track-modal-prize-position"
                    />
                    <div>
                      <div className="track-modal-prize-position-text">
                        {item.position} Prize
                      </div>
                      <div className="track-modal-prize-position-money">
                        {item.money} INR
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tracks-modal-problem">
            <div className="tracks-modal-problem-heading">
              Problem Statements
            </div>
            <div className="tracks-modal-problem-statements">
              {data.problemstatements.map((item, index) => {
                return (
                  <div className="tracks-modal-problem-statement" key={index}>
                    {index + 1}. {item.statement}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
      <img src={tracksmodal} alt="tracksmodal" className="tracks-modal-img" />
    </Dialog>
  );
}

export default TracksModal;
