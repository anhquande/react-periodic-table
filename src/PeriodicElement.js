import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import lodash from "lodash";
import classNames from "classnames";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";
import yellow from "@material-ui/core/colors/yellow";
import cyan from "@material-ui/core/colors/cyan";
import pink from "@material-ui/core/colors/pink";
import blueGrey from "@material-ui/core/colors/blueGrey";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 1,
    margin: (theme.spacing.unit * 1) / 2,
    backgroundColor: "#cacaca"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex"
  },
  atomicNumber: {},
  title: {},
  typeNobleGas: {
    backgroundColor: cyan[500]
  },
  typeMetalloid: {
    backgroundColor: yellow[700]
  },
  typeNonmetal: {
    backgroundColor: yellow[400]
  },
  typeAlkaliMetal: {
    backgroundColor: red[400]
  },
  typeAlkalineEarthMetal: {
    backgroundColor: yellow[200]
  },
  typeTransitionMetal: {
    backgroundColor: pink[200]
  },
  typePostTransitionMetal: {
    backgroundColor: blueGrey[300]
  },
  typeLanthanide: {
    backgroundColor: purple[400]
  },

  typeActinide: {
    backgroundColor: red[800]
  }
});
const PeriodicElement = ({ element, highlighted, classes }) => {
  let bgStyle;
  if (
    element.Type === "Noble Gas" ||
    element.Type === "Alkali Metal" ||
    element.Type === "Lanthanide" ||
    element.Type === "Alkaline Earth Metal" ||
    element.Type === "Transition Metal" ||
    element.Type === "Actinide" ||
    element.Type === "Post-Transition Metal"
  ) {
    bgStyle = lodash.camelCase("type " + element.Type);
  } else if (element.Metalloid) {
    bgStyle = "typeMetalloid";
  } else if (element.Nonmetal === "yes") {
    bgStyle = "typeNonmetal";
  }

  const bgCls = classes[bgStyle];
  return (
    <Paper className={classNames(classes.root, bgCls)}>
      <div className={classes.content}>
        <div className={classes.atomicNumber}>
          <Typography variant="subtitle1">{element.AtomicNumber}</Typography>
        </div>
        <div className={classes.title}>
          <Typography variant="title">{element.Symbol}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(PeriodicElement);
