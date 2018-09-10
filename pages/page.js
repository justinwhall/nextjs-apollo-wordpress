import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import App from '../components/App'

console.log('test');


class Page extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }

    const page = this.props.data.pageBy;
    return (
      <App>
        <article>
          <h1 dangerouslySetInnerHTML={{__html: page.title}} />
          <div className="post-content" dangerouslySetInnerHTML={{__html: page.content}} />
        </article>
      </App>
    );
  }
}

export const singlePage = gql`
  query singlePage($uri: String!) {
    pageBy(uri: $uri) {
      pageId
      title
      content
    }
  }
`

export default withRouter(graphql(singlePage, {
    options: (props) => {
      console.log(props);

      return ({
          // variables: {slug: props.router.query.slug },
          variables: {uri: 'solutions' },
      })
    }
  }
)(Page));
