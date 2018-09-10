import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import App from '../components/App'

class Post extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }

    const post = this.props.data.postBy;
    return (
      <App>
        <article>
          <h1>{post.title}</h1>
          <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}} />
        </article>
      </App>
    );
  }
}

export const singlePosts = gql`
  query singlePost($slug: String!) {
    postBy(slug: $slug) {
      postId
      title
      content
    }
  }
`

export default withRouter(graphql(singlePosts, {
    options: (props) => {
      return ({
          variables: {slug: props.router.query.slug },
      })
    }
  }
)(Post));
