import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

const resources_types = ['pivotal', 'github', 'codeship', 'papertrail', 'sentry']

class ProjectCell extends Component {

  render() {
    return (
      <tr>
        <td key={this.props.project.id}>{this.props.project.canonicalName}</td>
        {resources_types.map((resource, j) =>
          <td key={j} data-type={resource} className="dropzone">
            {this.props.project.resources.edges.map(({node}) =>
              <div key={node.id}>
                  {node.type === resource ?
                    <a href={node.url} data-node={node} draggable={true} target='_blank'>
                      {node.name ? node.name : '--' }
                    </a>
                   : ''}
              </div>
            )}
          </td>
        )}
      </tr>
    )
  }
}

export default createFragmentContainer(ProjectCell, graphql`
  fragment ProjectCell_project on Project {
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
