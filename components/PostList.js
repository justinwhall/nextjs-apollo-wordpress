import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

class PostList extends Component {
  getPosts() {

    if (this.props.data.loading) {
      return null;
    }

    return this.props.data.posts.nodes.map(post => {
      return (
        <article className="post">
          <h2>
          <Link prefetch href={{pathname: '/post', query: {slug: post.slug}}} as={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <small>{post.date}</small>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      )
    })
  }

  render() {
    return (
      <div>
        {this.getPosts()}
      </div>
    );
  }
}


export const allPosts = gql`
{
	posts {
    nodes{
      title
      id
      date
      excerpt
      slug
    }
  }
}
`

export default graphql(allPosts)(PostList)
