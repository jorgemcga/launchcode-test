import { Button as MUIButton, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { IThemeWetBat } from "styles/theme";

const useStyles = makeStyles((theme: IThemeWetBat) => ({
    button: {
      background: `${theme.defaultColors.color1} !important`,
      textDecoration: 'none !important',
      color: 'white !important',
      fontWeight: 'bold !important',
      borderRadius: `${theme.spacing(3)} !important`,
      paddingInline: `${theme.spacing(3)} !important`,
    }
}))

const Button: React.FC<ButtonProps> = (props) => {
    const classes = useStyles()
    return (
        <MUIButton {...props} className={classes.button} />
    )
}

export default Button
