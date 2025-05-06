import React from "react";
import ButtonLink from "../ButtonLink";
import { CardStyle } from "./cardEnums";

type CardType = {
  title: string;
  description: string;
  type: CardStyle;
  className?: string;
};

const cardTypeStyles: Record<CardStyle, string> = {
  [CardStyle.Featured]: "bg-[#F3E8FF] text-[#6B21A8]",
  [CardStyle.Popular]: "bg-[#DBEAFE] text-[#1E40AF]",
  [CardStyle.New]: "bg-[#DCFCE7] text-[#166534]",
};

export default function Card({
  title,
  description,
  type,
  className,
}: CardType) {
  return (
    <article className={`keen-slider__slide card ${className}`}>
      <span className={`card-type ${cardTypeStyles[type]}`}>{type}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ButtonLink
        href="/"
        label="Take Lesson"
        variant={"outlineDefault"}
        size="sm"
      />
    </article>
  );
}
