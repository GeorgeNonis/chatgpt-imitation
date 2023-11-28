import { IdeaProposal } from "./types";

export const IDEAS: IdeaProposal[] = [
  { title: "Give me ideas", idea: `for what to do with my kids' art` },
  {
    title: "Brainstorm incentives",
    idea: "for a customer loyalty program in a small bookstore",
  },
  { title: "Write a text", idea: "inviting my neighbors to a barbecue" },
  {
    title: "Explain options trading",
    idea: "if I'm familiar with buying and selling stocks",
  },
  {
    title: "Suggest healthy snacks",
    idea: "that are easy to make for a preschool class",
  },
  { title: "Create a workout plan", idea: "for someone with a busy schedule" },
  {
    title: "Design a reading challenge",
    idea: "for a group of teenagers during the summer",
  },
  {
    title: "Plan a weekend itinerary",
    idea: "for a historical tour of my city",
  },
  {
    title: "Develop a marketing strategy",
    idea: "for an online craft business",
  },
  {
    title: "Draft a letter",
    idea: "requesting sponsorship for a community event",
  },
  {
    title: "Outline a beginner's guide",
    idea: "to starting a vegetable garden",
  },
  {
    title: "Propose activities",
    idea: "for a family reunion with all age groups",
  },
];

export const STORE_CONVS = [
  "How to learn Coding",
  "How to be a developer",
  "Tzatziki",
  "Gyros",
];

export const errorStatuses = [
  { status: 400, message: "Bad request. Please check your input." },
  {
    status: 401,
    message: "You are not authorized. Please check your credentials.",
  },
  {
    status: 403,
    message: "Access forbidden. You don't have permission to access this.",
  },
  { status: 404, message: "Resource not found." },
  { status: 429, message: "You are only allowed 3 messages every 1 minute." },
  { status: 500, message: "Internal Server Error. Please try again later." },
];
