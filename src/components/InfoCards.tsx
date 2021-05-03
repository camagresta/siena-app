import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      maxHeight: 330,
    },
    media: {
      height: 140,
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      paddingTop: 30,
    },
    content: {
      paddingBottom: 0,
    },
  })
)

const InfoCards = () => {
  const classes = useStyles()
  return (
    <div className={classes.flexContainer}>
      <Card className={classes.root}>
        <StaticImage alt="" src={'../images/rolledBlueprints.png'} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Planning and Mapping
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Siena’s services range from feasibility studies, right of way and
            permitting to managing construction, preparing as-built plans, and
            project close-out.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <StaticImage alt="" src={'../images/cables.png'} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Turnkey Capabilities
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Siena’s services range from feasibility studies, right of way and
            permitting to managing construction, preparing as-built plans, and
            project close-out.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <StaticImage alt="" src={'../images/city.png'} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Permitting
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Siena’s services range from feasibility studies, right of way and
            permitting to managing construction, preparing as-built plans, and
            project close-out.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default InfoCards
