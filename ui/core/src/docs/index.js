// file: docs/index.js
import React from 'react';
import { withRouter } from 'react-router';
import fetch from 'isomorphic-fetch';
import TableOfContents from 'docs/TableOfContents';
import DocPage from 'docs/DocPage';

// Base components
import Spinner from 'react-to-mdl/spinner';
import Layout from 'react-to-mdl/layout';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from 'docs/styles.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      docs: [],
      filename: this.props.params.filename
    };
  }

  componentDidMount() {
    this.loadTOC();
    this.fetchDocsData(`${this.state.filename}?_format=json`)
      .then(response => {
        this.setState({
          file: response.data,
        })
      });
  }
  componentDidUpdate() {
    let currentFileName = this.props.params.filename;
    if(this.state.filename != currentFileName){
      this.fetchDocsData(`${currentFileName}?_format=json`)
        .then(response => {
          this.setState({
            file: response.data,
            filename: currentFileName
          })
        });
    }
  }
  responseToJson(response) {
    if(response.status >= 400) throw new Error(response.status);
    return response.json();
  }
  fetchDocsData(path) {
    // TODO: change window.location.origin to a URL variable rendered from the server.
    return fetch(`${window.location.origin}/docs/${path}`)
      .then(this.responseToJson)
      .catch(err => {
        console.log(`Request failed. ${err}`)
      });
  }
  loadTOC() {
    this.fetchDocsData('index')
      .then(response => {
        this.setState({
          docs: response.data,
        })
      });
  }

  render() {
    return (
      <div>
        <TableOfContents docs={this.state.docs}/>
        <DocPage file={this.state.file}/>
      </div>
    );
  }
}

/*** exports ***/
export default  withRouter(
  mdlUpgrade(
    CSSModules(Index, styles)
  )
);
