import React from "react";
import ButtonOutlined from "../ButtonOutlined";

type CardType = {
  title: string;
  description: string;
  type: "featured" | "popular" | "new";
};

export default function Card({ title, description, type }: CardType) {
  return (
    <div className="card">
      <span className={`card-type ${type}`}>{type}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ButtonOutlined label="Take Lesson" colorDefault="#2563EB" />
    </div>
  );
}
