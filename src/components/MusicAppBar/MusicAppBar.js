import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './MusicAppBar.css'
// import Image from 'components/Image/Image'

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  }
};

function MusicAppBar(props) {
  // const { classes } = props;
  return (
    <div className="app-bar-root">
      <AppBar className="app-bar" position="static" color="default">
        <Toolbar className="app-bar-tool-bar">
          <img className="app-bar-image" src={require('images/doudou-app-bar.png')}/>
          <Typography className="app-bar-typography" variant="title" color="inherit">
            doudouMusic
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// MusicAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MusicAppBar);
