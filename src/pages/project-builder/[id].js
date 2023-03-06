import React from "react";
import { ProjectBuilder } from "@/schemas/ProjectBuilder";
import { connectDB } from "@/schemas/connection";

const Project = (projectBuilder) => {
  console.log(projectBuilder);
  return (
    <>
      <ProjectBuilder />
    </>
  );
};

const resultNotFound = {
  notFound: true,
  redirect: {
    destination: "/",
    permanent: false,
  },
};

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  if (!id) return resultNotFound;

  const conn = await connectDB();

  const projectBuilder = await ProjectBuilder.findOne({ id });

  conn.close();

  if (!projectBuilder) return resultNotFound;

  return {
    props: projectBuilder.toObject(),
  };
};

export default Project;
