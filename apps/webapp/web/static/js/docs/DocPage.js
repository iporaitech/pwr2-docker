// file: docs/DocPage.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import mdlUpgrade from 'lib/mdlUpgrade';
import material from 'material-design-lite/material.css';
import styles from 'docs/styles.css';
import 'docs/hljs.css';

class DocPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="mdl-grid">
        <div styleName="mdl-cell mdl-cell--12-col">
          <div styleName="doc-page">
            <ReactMarkdown source={this.props.file} renderers={Object.assign({},
                ReactMarkdown.renderers, { CodeBlock: CodeBlock })}/>
          </div>
        </div>
      </div>
    );
  }
}

export default mdlUpgrade(DocPage, Object.assign({}, material, styles), {allowMultiple: true});
