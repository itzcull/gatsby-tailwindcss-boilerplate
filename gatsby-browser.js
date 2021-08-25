import React from "react"
import Layout from "./src/components/Layout"

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}