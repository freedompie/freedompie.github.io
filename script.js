//-- View full TypeIt documentation at https://typeitjs.com.

class Type extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return React.createElement("span", { ref: el => {this.el = el;} }, this.props.children);
  }}


ReactDOM.render(
React.createElement("div", null,
React.createElement(Type, {
  strings: "Kenneth sucks. <br> \u2013 Jasper Chung",
  loop: true,
  loopDelay: 5000,
  speed: 40 })),


document.getElementById('root'));