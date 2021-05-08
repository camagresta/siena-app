import * as React from 'react'
import Layout from '../components/Layout'
import { Grid } from '@material-ui/core'
import useStyles from '../styles/home'

const IndexPage = () => {
  const classes = useStyles()
  return (
    <main>
      <title>Siena Engineering</title>
      <Layout>
        <Grid container className={classes.container} zeroMinWidth></Grid>
      </Layout>
    </main>
  )
}

export default IndexPage
