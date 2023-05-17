import React from "react";
import "../componentsCSS/title.css";

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2 className='title'>{headline}</h2>;
  }
}

export default Title;
