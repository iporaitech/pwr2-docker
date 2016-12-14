// file: docs/DocPage.js
import React from 'react';
import { withRouter } from 'react-router';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

// Base components
import Grid, { Cell } from 'shared/grid';

// CSS
import CSSModules from 'react-css-modules';
import mdlUpgrade from 'lib/mdlUpgrade';
import styles from 'docs/styles.scss';
import 'docs/hljs.scss';

class DocPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div styleName="doc-page">
            <ReactMarkdown source={this.props.file} renderers={Object.assign({},
                ReactMarkdown.renderers, { CodeBlock: CodeBlock })}/>
          </div>
        </Cell>
      </Grid>
    );
  }
}

/*** exports ***/
export default withRouter(
  mdlUpgrade(
    CSSModules(DocPage, styles)
  )
);
