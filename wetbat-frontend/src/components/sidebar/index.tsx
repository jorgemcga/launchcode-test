import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import ListIcon from "@mui/icons-material/List"
import { makeStyles } from "@mui/styles"
import { IThemeWetBat } from "../../styles/theme"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme: IThemeWetBat) => ({
  drawer: {
    flexShrink: 0,
    background: theme.palette.grey[100]
  },
}))

const Sidebar = () => {
  const classes = useStyles()

  return (
    <Grid item xs={3} className={classes.drawer}>
      <List>
        <Link to='/'>
            <ListItem>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link to='/quotes'>
            <ListItem>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Quotes" />
            </ListItem>
        </Link>
      </List>
    </Grid>
  )
}

export default Sidebar
