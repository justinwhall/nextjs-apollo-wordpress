import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
    <Link prefetch href={{pathname: '/post', query: {slug: 'wp-minimum-image-upload-size'}}} as="/post/wp-minimum-image-upload-size">
      <a>Single Post</a>
    </Link>
    <Link prefetch href={{pathname: '/page', query: {slug: 'work'}}} as="/page/work">
      <a>Work</a>
    </Link>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
