// file: lib/mdlUpgrade.js
import { findDOMNode } from 'react-dom';
import CSSModules from 'react-css-modules';
import { mdl } from "exports?mdl=componentHandler!material-design-lite/material";

export default (WrappedComponent, styles = {}, options = {}) => {
  const CSSComponent = CSSModules(WrappedComponent, styles, options);
  return class extends CSSComponent {
    componentDidMount() {
      if(super.componentDidMount){
        super.componentDidMount();
      }
      mdl.upgradeElements(findDOMNode(this));
    }
    componentWillUnmount(){
      if(super.componentWillUnmount){
        super.componentWillUnmount();
      }
      mdl.downgradeElements(findDOMNode(this));
    }
  }
}
