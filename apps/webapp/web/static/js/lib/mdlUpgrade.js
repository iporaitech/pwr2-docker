// file: lib/mdlUpgrade.js
import { findDOMNode } from 'react-dom';
import { mdl } from "exports?mdl=componentHandler!material-design-lite/material";

export default (WrappedComponent) => {
  return class extends WrappedComponent {
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
