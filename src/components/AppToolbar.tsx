import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 600,
    },
    navButton: {
      fontWeight: 600,
      paddingRight: 10,
    },
  })
)
const appToolbarItems = [
  { text: 'Our Services', route: '/services' },
  { text: 'About Us', route: '/about' },
  { text: 'Careers', route: '/careers' },
  { text: 'Contact Us', route: '/contact' },
]
const AppToolbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position="fixed" color="primary">
      <Toolbar>
        <Link
          className={classes.title}
          style={{ textDecoration: 'none' }}
          to={'/'}
        >
          <Typography className={classes.title} variant="h6" color="secondary">
            Siena Engineering
          </Typography>
        </Link>
        {appToolbarItems.map((item) => {
          return (
            <Link style={{ textDecoration: 'none' }} to={item.route}>
              <Button className={classes.navButton} color="secondary">
                {item.text}
              </Button>
            </Link>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}
export default AppToolbar
