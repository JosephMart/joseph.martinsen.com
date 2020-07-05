import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <p style={{ textAlign: "center" }}>Redoing site from scratch 🙂</p>
  </Layout>
)

export default IndexPage
