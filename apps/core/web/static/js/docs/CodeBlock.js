// file: docs/CodeBlock.js
import React from 'react';
import hljs from 'highlight.js'

class CodeBlock extends React.Component{
  componentDidMount() {
    this.highlightCode();
  }
  componentDidUpdate() {
    this.highlightCode();
  }
  highlightCode() {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre>
        <code className={this.props.language} ref="code">
          {this.props.literal}
        </code>
      </pre>
    );
  }
};

export default CodeBlock;
