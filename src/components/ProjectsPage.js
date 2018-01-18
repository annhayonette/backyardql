import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ProjectInfo from './ProjectInfo'

const ProjectsPageQuery = graphql`
  query ProjectsPageQuery {
    viewer{
      ...ProjectInfo_viewer
    }
  }
`

class ProjectsPage extends Component {

  render() {
    return (
      <div>
        <p>Hola mundo</p>
        <QueryRenderer
          environment={environment}
          query={ProjectsPageQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <ProjectInfo viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }

}

export default ProjectsPage
