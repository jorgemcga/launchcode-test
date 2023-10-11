import { AppBar, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { IThemeWetBat } from "../../styles/theme"
import DashboardIcon from "@mui/icons-material/Dashboard"

const useStyles = makeStyles((theme: IThemeWetBat) => ({
  appBar: {
    background: `${theme.defaultColors.color2} !important`,
  },
  title: {
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    "& svg": {
      marginRight: "10px",
    },
  },
  button: {
    marginRight: theme.spacing(2)
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="body1" className={classes.title}>
          <DashboardIcon fontSize="medium" /> Wet Bat Travel
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
