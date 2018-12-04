import React from 'react';
import Home from './app/views/Home';
import Contact from './app/views/Contact';
import Video from './app/views/Video';
import VideoDetail from './app/views/VideoDetail';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  }
},
{
  initialRouteName: 'HomeRT'
});

const AppContainer = createAppContainer(MyRoutes);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


