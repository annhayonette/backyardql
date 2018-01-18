class ResourceRows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      resource_types: ['pivotal', 'github', 'codeship', 'papertrail','sentry'],
    };
  }

  componentDidMount() {
    get_data(this);
  }

  dragProject (item, ev) {
    ev.dataTransfer.setData('resourceData', JSON.stringify(item));
    ev.dataTransfer.setData('origin', ev.target.parentNode.parentNode.id);
  }

  handleDrop = (project, ev) => {
    ev.persist();
    const origin = ev.dataTransfer.getData('origin');
    const id = ev.target.parentNode.id;
    const resourceType = ev.target.dataset.type
    const resourceData = JSON.parse(ev.dataTransfer.getData('resourceData'));

    addItem(this.state.data[id], resourceType, resourceData)
    removeItem(this.state.data[origin], resourceType, resourceData)

    this.setState({ data: this.state.data });

    if(this.state.data[origin].persistent.slug != ''){
      post_data(this.state.data[origin].persistent);
    }
    post_data(this.state.data[id].persistent);
  }

  rows = (project, i) => {
    return (
        <tr key={i} id={project.id}>
          <td>
            <a href={`/proyectos/${project.id}`}>{project.persistent.canonical_name}</a>
          </td>
          {this.state.resource_types.map((resource, j) =>
            <td key={j} data-type={resource} className="dropzone" onDrop={this.handleDrop.bind(this, project)}>
              {project[resource]? project[resource].map((item) =>
                <a key={item.id} href={item.url} data-item={item} onDragStart={this.dragProject.bind(this, item)} draggable={true} target='_blank'>
                  {item.name ? item.name : '--' }
                </a>
              ) : ''}
            </td>
          )}
        </tr>
      )
  }

  render() {

    return (
      <tbody>
        {this.state.data.map(this.rows)}
      </tbody>
    )
  }
}

class ProjectTable extends React.Component {
  render() {
    return (
      <table id="data-table" className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Pivotal</th>
            <th>Github</th>
            <th>Codeship</th>
            <th>Papertrail</th>
            <th>Sentry</th>
          </tr>
        </thead>
        <ResourceRows />
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <ProjectTable />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('table_react'));
