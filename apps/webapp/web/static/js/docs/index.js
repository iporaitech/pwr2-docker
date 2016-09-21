// file: docs/index.js
import React from 'react';
import mdlUpgrade from 'lib/mdlUpgrade';
import material from 'material-design-lite/material.css';
import styles from 'docs/styles.css';
import TableOfContents from 'docs/TableOfContents';
import DocPage from 'docs/DocPage';
import fetch from 'isomorphic-fetch';

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
      <div className="page-content">
        <TableOfContents docs={this.state.docs}/>
        <DocPage file={this.state.file}/>
      </div>
    );
  }
}

export default mdlUpgrade(Index, Object.assign({}, material, styles), {allowMultiple: true});
