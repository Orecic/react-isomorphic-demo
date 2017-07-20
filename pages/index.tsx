import * as React from 'react'
import Link from 'next/link'
import { getList, postData } from '../services'

import * as stylesheet from './index.less'


const PostLink = (props) => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

export default class extends React.Component {
  static async getInitialProps (context) {
    const json = await getList()
    return { json }
  }


  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <ul className="nav">
          <li><Link href='/' ><a>index</a></Link></li>
          <li><Link href='/hello'><a>hello</a></Link></li>
         </ul>
        <ul>
          <PostLink id="hello-wolrd" title="Hello Wolrd!"/>
          <PostLink id="hello-rabbit" title="Hello Rabbit"/>
        </ul>
      </div>
    )
  }
}
