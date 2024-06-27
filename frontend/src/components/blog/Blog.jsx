import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import ResumeBuilder from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Resume Builder' />
       <ResumeBuilder />
    </>
  )
}

export default Blog
