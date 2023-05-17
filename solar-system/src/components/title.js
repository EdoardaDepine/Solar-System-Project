import React from "react";
import "../componentsCSS/title.css";

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className='containerTitle'>
        <h2 className='title'>{headline}</h2>
      </div>
    );
  }
}

export default Title;
