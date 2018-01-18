//React.Component es una clase abstracta que React provee
class Padre extends React.Component {
	//se debe traer explicitamente props o this.props estara indefinido.
	constructor(props){
		//you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
		super(props)
		// Evitar agregar "efectos" en el constructor.
		//En el constructor se inicializa la data sera modificada mas adelante.
		this.state = {
			// Es bueno inicializar vacio y agregar la data mas adelante con setState dentro de un metodo. Esto asegura que los datos que se estan usando estan actualizados.
			data1: '',
			data2: ''
		}
	}

	// Seteo de datos una vez que este componente fue montado.
	// Se invoca luego del metodo render() y actualiza el valor de la data
	componentDidMount(){
		// setState aqui volvera a renderear actualizando las partes del componente que lo necesitan.
		this.setState({ data1: 'nombre1', data2: 'nombre2'});
	}

	// No se deben modificar los datos aqui, solo mostrar.
	render() {
		return (
			<div>
				// Aqui se renderea el componente hijo.
				// En la propiedad "data" estamos entregando al componente HIJO los datos declarados en el padre.
				<Hijo data={this.state.data1}/>
				<Hijo data={this.state.data2}/>
			</div>
		)
	}
}

class Hijo extends React.Component {

	//La sintaxis ESC6 de js no hace el autobind del this de react.
	handler() {
		alert('hola mundo');
	}

	render () {
		return (
			// Hay que poner el evento en el elemento sobre el cual actua.
			// Antes no funcionaba porque en click ocurre en el <a></a>, no en "<Hijo />"
			// Finalmente se muestran los datos recibidos del padre.
			<a href="#" onClick={this.handler}>{this.props.data}</a>
		)
	}
}

class App extends React.Component {
  render() {
    return (
		// El padre con tiene al Hijo y la App contiene al padre :)
		<Padre />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('contenedor'));
