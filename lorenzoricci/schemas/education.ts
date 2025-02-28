// schemas/job.ts

import { BiBriefcase } from "react-icons/bi";

const education = {
  name: "education",
  title: "Education",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "University Name",
      type: "string",
      description: "What is the name of the university?",
    },
    {
      name: "universityTitle",
      title: "University Title",
      type: "string",
      description: "Enter the university title. E.g: Politecnico Di Torino",
    },
    {
      name: "logo",
      title: "University Logo",
      type: "image",
    },
    {
      name: "url",
      title: "University Website",
      type: "url",
    },
    {
      name: "description",
      title: "University Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about your studies",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default education;