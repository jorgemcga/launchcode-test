import { Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { makeStyles } from "@mui/styles"
import { IThemeWetBat } from "../../styles/theme"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme: IThemeWetBat) => ({
  drawer: {
    flexShrink: 0,
    background: theme.palette.grey[100],
  },
  link: {
    textDecoration: "none",
    color: theme.defaultColors.color2,
    "& svg": {
        color: theme.defaultColors.color2
    }
  },
}))

const Sidebar = () => {
  const classes = useStyles()

  return (
    <Grid item xs={3} className={classes.drawer}>
      <List>
        <Link to="/" className={classes.link}>
          <ListItem>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Quotes" />
          </ListItem>
        </Link>
      </List>
    </Grid>
  )
}

export default Sidebar
