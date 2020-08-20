const { Component, h, render, VNode } = window.preact;


/**
 * Example classful component.
 *
 * @extends {Component<!Object<string, *>, {message: string}>}
*/
class App extends Component {
  /**
   * @override
   */
  componentDidMount() {
    this.setState({ message: 'Hello!' });
  }

  /**
   * @param {!Object=} props
   * @param {{message: ?string}=} state
   * @return {!VNode<*>}
   * @override
   */
  render(props, state) {
    return (
      h('div', { id: 'app' },
        h(Header, { message: state.message }),
        h(Main)
      )
    );
  }
}


/**
 * Components can just be pure functions.
 *
 * @param {{message: ?string}} props
 * @return {!VNode<*>}
 */
function Header(props) {
  return h('header', null,
    h('h1', null, 'App'),
    props.message && h('h2', null, props.message)
  );
}


/** Instead of JSX, use: h(type, props, ...children) */
class Main extends Component {
  /**
   * @override
   * @return {!VNode<*>}
   */
  render() {
    /** @type {!Array<!VNode<*>>} */
    const items = [1, 2, 3, 4, 5].map((/** @type {number} */ item) => (
      h('li', { id: item }, 'Item ' + item)
    ));
    return (
      h('main', null,
        h('ul', null, items)
      )
    );
  }
}


render(h(App), document.body);
