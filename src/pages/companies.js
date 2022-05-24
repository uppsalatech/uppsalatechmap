import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const IndexPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{marginTop: "2rem"}}>Discover tech companies in Uppsala</h2>
    <p>Join the conversation in the Uppsala Tech Community Slack by emailing <a href="mailto:hello@uppsalatech.se">hello@uppsalatech.se</a>.</p>
    
    <Map companies={pageContext.companies} />
    
    <div className="cards">
      {pageContext.companies && pageContext.companies.filter((v) => v.name).map((v, i) => {
        const id = v.name.replace(/\s/g, '');
        return (<div className="card" key={i} id={id}>
          <a href={v.url} className="name">{v.name}</a>
          <p>{v.description}</p>
          { v.jobs_url && <a href={v.jobs_url} className="jobs_url">Open positions</a>}
        </div>);
      })}
    </div>

    <div style={{marginTop:30, textAlign: "center"}}>
      <a href="https://github.com/uppsalatech/uppsalatechmap/edit/master/companies.json">Add your own company to the list</a>
    </div>
  </Layout>
)

export default IndexPage
