import * as React from 'react'

export default class extends React.Component {
  render (){
    return (
        <div>
          <h1>{this.props.url.query.title}</h1>
          <p>just a demo.</p>
        </div>
     )
  }
}
