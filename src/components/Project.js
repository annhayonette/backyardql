import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

const available_services = ['pivotal', 'github', 'codeship', 'papertrail', 'sentry']

class Project extends Component {

  render() {
    return (
      <div>
        <h3 key={this.props.project.id}>{this.props.project.canonicalName}</h3>
        {available_services.map((service) =>
          <div>
            <h4>{service}</h4>
            <div>
                <Icon service={service} project={this.props.project}/>
            </div>
          </div>
        )}
      </div>
    )
  }
}

class Icon extends Component {

  constructor() {
    super()
    this.state = {
      hasService: false
    }
  }

  componentDidMount(){
    this.props.project.resources.edges.map(({node}) =>
      node.type === this.props.service ? this.setState({ hasService:true }) : ''
    )
  }

  render() {
    return (
      <div>
        {this.state.hasService ?
          <p>YES ACCESS</p>
        :
           <p>NO ACCESS</p>
        }
      </div>
    )
  }
}

export default createFragmentContainer(Project, graphql`
  fragment Project_project on Project {
    id
    canonicalName
    resources {
      edges {
        node {
          id
          type
          name
          url
        }
      }
    }
  }
`)
