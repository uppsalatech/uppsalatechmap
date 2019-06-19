import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Companies from "/companies.json";

//console.log("DATA", Companies);

const IndexPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Discover tech companies in Uppsala.</h2>

    <div className="cards">
      {pageContext.companies && pageContext.companies.filter((v) => v.name).map((v, i) => {
        return (<div className="card" key={i}>
          <a href={v.url} className="name">{v.name}</a>
          <p>{v.description}</p>
          { v.jobs_url && <a href={v.jobs_url} className="jobs_url">Open positions</a>}
        </div>);
      })}
    </div>

    <div style={{marginTop:30, textAlign: "center"}}>
      <a href="https://github.com/uppsalatech/uppsalatechmap/edit/master/companies.json">Add your own company to the list</a>
    </div>


    {/* {JSON.stringify(pageContext)} */}


    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
     */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
