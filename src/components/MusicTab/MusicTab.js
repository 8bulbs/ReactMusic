import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import SongList from 'pages/songList/songList'
import Recommend from 'pages/recommend/recommend'
import SingerList from 'pages/singerList/singerList'
import Search from 'pages/search/search'
import './MusicTab.css'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 375,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className="music-tabs" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab className="music-tab" label="推荐" />
            <Tab className="music-tab" label="歌单" />
            <Tab className="music-tab" label="歌手" />
            <Tab className="music-tab" label="搜索" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          disabled={true}
        >
          <TabContainer dir={theme.direction}>
            <Recommend />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SongList />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SingerList />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Search />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
