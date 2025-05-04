import React from "react";
import ButtonOutlined from "../ButtonOutlined";

type CardType = {
  title: string;
  description: string;
  type: string;
};

export default function Card({ title, description, type }: CardType) {
  return (
    <div>
      <span className={type}>{type}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonOutlined label="Take Lesson" colorDefault="#2563EB" />
    </div>
  );
}
