import React, {PropTypes} from 'react';
import Header from './common/Header';
//This component handles the App template used on every page.
class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;