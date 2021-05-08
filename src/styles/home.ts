import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { colors } from '../themes/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: colors.red,
      height: '100vh',
    },
  })
)
export default useStyles
