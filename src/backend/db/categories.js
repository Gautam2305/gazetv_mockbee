import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Informative",
    description:
      "Information at your fingertips to exercise your brain.",
  },
  {
    _id: uuid(),
    categoryName: "Music",
    description:
      "Watch your favourite music videos here.",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    description:
      "Laugh out loud with these videos when feeling low.",
  },
  {
    _id: uuid(),
    categoryName: "Movies",
    description:
      "Your destination for world's newest, grandest cinema.",
  },
];
