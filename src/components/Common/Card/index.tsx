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
  [CardStyle.Featured]: "bg-light-purple text-purple",
  [CardStyle.Popular]: "bg-light-blue text-purple-blue",
  [CardStyle.New]: "bg-light-green text-green",
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
