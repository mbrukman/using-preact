const { Component, render, VNode } = window.preact;

/**
 *
 * @type {function(!Array<string>, ...*): (!VNode<*> | !Array<!VNode<*>>)}
 */
const html = window.htm.bind(window.preact.h);

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
   * @return {!VNode<*> | !Array<!VNode<*>>}
   * @override
   */
  render(props, state) {
    return html`
      <div id="app">
        <${Header} message="${state.message}" />
        <${Main} />
      </div>`;
  }
}


/**
 * Components can just be pure functions.
 *
 * @param {{message: ?string}} props
 * @return {!VNode<*> | !Array<!VNode<*>>}
 */
function Header(props) {
  console.log('Header props: ' + JSON.stringify(props));
  return html`
    <header>
      <h1>App</h1>
      ${props.message ? html`<h2>${props.message}</h2>` : ``}
    </header>`;
}


/**  HTML template literals look very similar to JSX. */
class Main extends Component {
  /**
   * @override
   * @return {!VNode<*> | !Array<!VNode<*>>}
   */
  render() {
    /** @type {!Array<!VNode<*>>} */
    const items = [1, 2, 3, 4, 5].map((/** @type {number} */ item) => (
      html`<li id="${item}">Item ${item}</li>`
    ));
    return html`
      <main>
        <ul>
          ${items}
        </ul>
      </main>`;
  }
}


render(html`<${App} />`, document.body);
