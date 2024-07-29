
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import "react-sweet-progress/lib/style.css";
import "./Card.css";
import "./ProfessionalSkills.css"

const CardComp = (props) => {
  return (
    <>
      <Card
        sx={{ display: "flex", alignItems: "center" }}
        className="mb-4 gap-3 ml-3"
      >
        <CardMedia 
          component="img"
          sx={{ width: 120, height: 120, margin: "auto" }}
          image={props.details.image}
          className="p-3 object-fit-cover border rounded card"
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
};

export default CardComp;
