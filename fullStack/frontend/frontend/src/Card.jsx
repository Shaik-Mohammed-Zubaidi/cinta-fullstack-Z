import React from "react";
import './App.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function SimpleCard(props) {
  const { cardData, cardClass } = props;

  return (
    <Card className={cardClass}>
      <CardContent>{cardData}</CardContent>
    </Card>
  );
}
