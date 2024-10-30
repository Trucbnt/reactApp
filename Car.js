class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color : "red"};
    }
    render(){
        return <h1>this a {this.state.color} {this.props.name}</h1>
    }
}