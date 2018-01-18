import React, { Component } from 'react'
import ProjectCell from './ProjectCell'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ProjectRow extends Component {

  render() {
    return (
      <tbody>
        {this.props.viewer.allProjects.edges.map(({node}) =>
            <ProjectCell key={node.__id} project={node} />
        )}
      </tbody>
    )
  }
}

export default createFragmentContainer(ProjectRow, graphql`
  fragment ProjectRow_viewer on Viewer {
    allProjects(last: 100, orderBy: id_ASC) {
      edges {
        node {
          ...ProjectCell_project
        }
      }
    }
  }
`)
