import * as React from 'react'
import App from '../components/App'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Box,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { colors } from '../themes/colors'
import InfoCards from '../components/InfoCards'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      maxHeight: 400,
      backgroundColor: colors.beige,
    },
    media: {
      height: 140,
    },
    card: {
      display: 'flex',
      backgroundColor: colors.red,
      color: colors.beige,
      fontWeight: 700,
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    secondRoot: {
      paddingBottom: '80px',
      paddingRight: '50px',
      paddingLeft: '50px',
      height: '100vh',
      backgroundColor: colors.darkGrey,
    },
    servicesHeader: {
      textAlign: 'center',
      color: colors.beige,
      fontWeight: 700,
      padding: 50,
    },
  })
)
const IndexPage = () => {
  const classes = useStyles()
  return (
    <main>
      <title>Siena Engineering</title>
      <App>
        <div style={{ display: 'grid' }}>
          <StaticImage
            style={{
              gridArea: '1/1',
              height: '92vh',
            }}
            layout="fullWidth"
            aspectRatio={0 / 0}
            alt=""
            src={'../images/homepage.png'}
            formats={['auto', 'webp', 'avif']}
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center',
              display: 'grid',
              height: '92vh',
            }}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography component="h2" variant="h2">
                  Gig Speeds. Fast.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={classes.secondRoot}>
          <Box className={classes.servicesHeader}>
            <Typography variant="h2">OUR SERVICES</Typography>
          </Box>
          <InfoCards />
        </div>
      </App>
    </main>
  )
}

export default IndexPage
