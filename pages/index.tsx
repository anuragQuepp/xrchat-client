import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const SceneRoot = dynamic(() => import('../components/xr/scene'), { ssr: false })
import React from 'react'
import Environment from '../components/xr/scene/environment'
// import Login from '../components/ui/Login'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Login /> */}
        <SceneRoot>
          <Environment/>
        </SceneRoot>
      </Layout>
    )
  }
}
