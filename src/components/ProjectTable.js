import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import ProjectRow from './ProjectRow'

const ProjectsTableQuery = graphql`
  query ProjectTableQuery {
    viewer{
      ...ProjectRow_viewer
    }
  }
`

class ProjectTable extends Component {

  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={ProjectsTableQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <table>
                      <thead>
                        <tr>
                          <th>Proyecto</th>
                          <th>Pivotal</th>
                          <th>Github</th>
                          <th>Codeship</th>
                          <th>Papertrail</th>
                          <th>Sentry</th>
                        </tr>
                      </thead>
                      <ProjectRow viewer={props.viewer} />
                    </table>
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }

}

export default ProjectTable
