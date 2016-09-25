import React, {PropTypes} from 'react';
//This component handles the App template used on every page.
class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;