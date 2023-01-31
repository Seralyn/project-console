import * as React from "react"
import '../styles/basic-styles.css'; 
import HeaderBar from '../components/HeaderBar'




const IndexPage = () => {
  return (
    <main className="page-container">
      <div className='text--white'>Some white text for testing</div>
      <HeaderBar />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Console</title>
