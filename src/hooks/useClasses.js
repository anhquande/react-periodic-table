import { makeStyles, useTheme } from "@material-ui/styles";

export function useClasses(styles, ...props) {
  const theme = useTheme();
  const useStyles = makeStyles(styles(theme, props), { withTheme: theme });
  return useStyles();
}
