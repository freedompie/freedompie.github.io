


//-- View full TypeIt documentation at https://typeitjs.com.

class Type extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return React.createElement("span", { ref: el => { this.el = el; } }, this.props.children);
  }
}

ReactDOM.render(
  React.createElement("div", null,
    React.createElement(Type, {
      strings: [
        "Jasper Chung",
        "Changing hearts and minds",
        "Trying his best not to get laid off",
        "Pika pika"
      ],
      speed: 100,
      breakLines: false,
      autoStart: true,
      loop: true,
      nextStringDelay: 1000,
      deleteSpeed: 50,
    })
  ),
  document.getElementById('cycling-title')
);
