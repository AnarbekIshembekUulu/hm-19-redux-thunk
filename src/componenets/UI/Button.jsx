import React from "react";
// import styled from "@mui/system";
import Button from "@mui/material/Button";

function ButtonComponent({
  children,
  variant = "contained",
  borderStyle = "roundet",
  onClick,
}) {
  // const style = {
  //   backgroundColor: getBackgroundColor(variant),
  // };
  // const getBackgroundColor = (props) => {
  //   return props.variant === "contained" ? " #8a2b06" : "#ffffff";
  // };

  // const getBorder = (props) => {
  //   return props.variant === "contained" ? "none" : "1px solid #8A2B06";
  // };
  // const getColor = (props) => {
  //   return props.variant === "contained" ? "#fff" : "#8a2b06";
  // };

  // const getBorderRadius = (props) => {
  //   return props.borderStyle === "roundet" ? "20px" : "6px";
  // };
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          borderRadius: borderStyle === "roundet" ? "20px" : "6px",
          color: variant === "contained" ? "#fff" : "#8a2b06",
          background: variant === "contained" ? "#8a2b06" : "#ffffff",
          border: variant === "contained" ? "none" : "1px solid #8A2B06",
          // hover: { color: "#080000", background: "#7e2a0a" },
        }}
        color="error"
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </Button>
      {/* <StyledButton
        variant={variant}
        borderStyle={borderStyle}
        onClick={onClick}
      >
        {children}
      </StyledButton> */}
    </>
  );
}

export default ButtonComponent;

// const ButtonStyle = styled(Button)(()=>())

// const StyledButton = styled.button`
//   padding: 10px 32px;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 24px;
//   color: ${getColor};
//   border-style: none;
//   background: ${getBackgroundColor};
//   border-radius: ${getBorderRadius};
//   border: ${getBorder};
//   box-sizing: border-box;
//   display: flex;
//   justify-content: space-around;
//   cursor: pointer;
//   &:hover {
//     color: #fff;
//     background: #7e2a0a;
//   }
//   :active {
//     background: #993108;
//   }
// `;
