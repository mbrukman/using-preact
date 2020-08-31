/**
 * @fileoverview Extern definitions for Preact, based on
 *     https://github.com/preactjs/preact/blob/10.4.6/src/index.d.ts
 * @externs
 */

/** @const */
var preact = {};

//
// Preact Virtual DOM
// -----------------------------------

/**
 * Preact Virtual Dom
 *
 * @interface
 * @template P
 */
preact.VNode = class {
  constructor() {
    /**
     * @type {preact.ComponentType<P> | string}
     */
    this.type;

    /**
     * @type {P | {children: preact.ComponentChildren}}
     */
    this.props;

    /**
     * @type {preact.Key}
     */
    this.key;

    /**
     * ref is not guaranteed by React.ReactElement; for compatibility reasons
     * with popular React libs, we define it as optional, too.
     * @type {preact.Ref<*> | null}
     */
    this.ref;

    /**
     * The time this `vnode` started rendering. Will only be set when
     * the devtools are attached. Default value: `0`.
     * @type {?number}
     */
    this.startTime;

    /**
     * The time that the rendering of this `vnode` was completed. Will only be
     * set when the devtools are attached. Default value: `-1`.
     * @type {?number}
     */
    this.endTime;
  }
};

// interface VNode<P = {}> {
//   type: ComponentType<P> | string;
//   props: P & { children: ComponentChildren };
//   key: Key;
//   /**
//    * ref is not guaranteed by React.ReactElement, for compatibility reasons
//    * with popular react libs we define it as optional too
//    */
//   ref?: Ref<any> | null;
//   /**
//    * The time this `vnode` started rendering. Will only be set when
//    * the devtools are attached.
//    * Default value: `0`
//    */
//   startTime?: number;
//   /**
//    * The time that the rendering of this `vnode` was completed. Will only be
//    * set when the devtools are attached.
//    * Default value: `-1`
//    */
//   endTime?: number;
// }

//
// Preact Component interface
// -----------------------------------

/** @typedef {string | number | *} */
preact.Key;

// type Key = string | number | any;

/**
 * @typedef {{current: ?*} | null}
 */
preact.RefObject;

// type RefObject<T> = { current?: T | null };

/**
 * @typedef {function(?*): void}
 */
preact.RefCallback;

// type RefCallback<T> = (instance: T | null) => void;

/** @typedef {preact.RefObject | preact.RefCallback} */
preact.Ref;

// type Ref<T> = RefObject<T> | RefCallback<T>;

/** @typedef {preact.VNode<*> | Object | string | number | boolean | null | undefined} */
preact.ComponentChild;

// type ComponentChild =
//         | VNode<any>
//         | object
//         | string
//         | number
//         | boolean
//         | null
//         | undefined;

/** @typedef {Array<preact.ComponentChild> | preact.ComponentChild} */
preact.ComponentChildren;

// type ComponentChildren = ComponentChild[] | ComponentChild;

/**
 * @interface
 */
preact.Attributes = class {
  constructor() {
    /** @type {?preact.Key} */
    this.key;

    /** @type {?boolean} */
    this.jsx;
  }
};

// interface Attributes {
//   key?: Key;
//   jsx?: boolean;
// }

/**
 * @interface
 * @extends {preact.Attributes}
 * @template T
 */
preact.ClassAttributes = class {
  constructor() {
    /** @type {?preact.Ref<T>} */
    this.ref;
  }
};

// interface ClassAttributes<T> extends Attributes {
//   ref?: Ref<T>;
// }

/**
 * @interface
 */
preact.PreactDOMAttributes = class {
  constructor() {
    /** @type {?preact.ComponentChildren} */
    this.children;

    /** @type {{__html: string} | null} */
    this.dangerouslySetInnerHTML;
  }
};

// interface PreactDOMAttributes {
//   children?: ComponentChildren;
//   dangerouslySetInnerHTML?: {
//     __html: string;
//   };
// }

/**
 * @typedef {preact.Attributes | {children: ?preact.ComponentChildren, ref: ?preact.Ref<*>}}
 */
preact.RenderableProps;

// type RenderableProps<P, RefType = any> = P &
//         Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<RefType> }>;

/** @typedef {preact.ComponentClass<P> | preact.FunctionComponent<P>} */
preact.ComponentType;

// type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

/** @typedef {preact.ComponentType<P>} */
preact.ComponentFactory;

// type ComponentFactory<P = {}> = ComponentType<P>;

/** @typedef {*} */
preact.ComponentProps;

// type ComponentProps<
//         C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements > = C extends ComponentType<infer P>
//         ? P
//         : C extends keyof JSXInternal.IntrinsicElements
//         ? JSXInternal.IntrinsicElements[C]
//         : never;

/**
 * @typedef {function(preact.RenderableProps<*>, *=): (preact.VNode<*> | null)}
 */
preact.FunctionComponent;

/** @type {?string} */
preact.FunctionComponent.prototype.displayName;

/** @type {?*} (partial) */
preact.FunctionComponent.prototype.defaultProps;

// interface FunctionComponent<P = {}> {
//   (props: RenderableProps<P>, context?: any): VNode<any> | null;
//   displayName?: string;
//   defaultProps?: Partial<P>;
// }

/**
 * @interface
 * @extends preact.FunctionComponent<P>
 * @template P
 */
preact.FunctionalComponent;

// interface FunctionalComponent<P = {}> extends FunctionComponent<P> { }

/**
 * @interface
 * @template P
 * @template S
 */
preact.ComponentClass = class {
  /**
   *
   * @param {P} props
   * @param {?*} context
   */
  constructor(props, context) {
    this.displayName;
    this.defaultProps;

  }
  /**
   *
   * @param {P} props (readonly)
   * @param {S} state (readonly)
   * @return {S} (partial)
   */
  getDerivedStateFromProps(props, state) { }

  /**
   * @param {*} error
   * @return {S} (partial)
   */
  getDerivedStateFromError(error) { }
};

// interface ComponentClass<P = {}, S = {}> {
//   new(props: P, context?: any): Component<P, S>;
//   displayName?: string;
//   defaultProps?: Partial<P>;
//   getDerivedStateFromProps?(
//     props: Readonly<P>,
//     state: Readonly<S>
//   ): Partial<S> | null;
//   getDerivedStateFromError?(error: any): Partial<S> | null;
// }

/**
 * @interface
 * @extends {preact.ComponentClass<P, S>}
 * @template P
 * @template S
 */
preact.ComponentConstructor;

// interface ComponentConstructor<P = {}, S = {}> extends ComponentClass<P, S> { }

/**
 * @type {preact.FunctionComponent<P> | preact.Component<P, S>}
 * @template P
 * @template S
 */
preact.AnyComponent;

// // Type alias for a component instance considered generally, whether stateless or stateful.
// type AnyComponent<P = {}, S = {}> = FunctionComponent<P> | Component<P, S>;

/**
 * @template P
 * @template S
 */
preact.Component = class {
  /**
   *
   * @param {P=} props
   * @param {*=} context
   */
  constructor(props, context) { }

  /**
   * @return {void}
   */
  componentWillMount() { }

  /**
   * @return {void}
   */
  componentDidMount() { }

  /**
   * @return {void}
   */
  componentWillUnmount() { }

  /**
   * @return {Object}
   */
  getChildContext() { }

  /**
   *
   * @param {P} nextProps (readonly)
   * @param {*} nextContext
   * @return {void}
   */
  componentWillReceiveProps(nextProps, nextContext) { }

  /**
   *
   * @param {P} nextProps (readonly)
   * @param {S} nextState (readonly)
   * @param {*} nextContext
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) { }

  /**
   *
   * @param {P} nextProps (readonly)
   * @param {S} nextState (readonly)
   * @param {*} nextContext
   * @return {void}
   */
  componentWillUpdate(nextProps, nextState, nextContext) { }

  /**
   *
   * @param {P} oldProps (readonly)
   * @param {S} oldState (readonly)
   * @return {*}
   */
  getSnapshotBeforeUpdate(oldProps, oldState) { }

  /**
   *
   * @param {P} previousProps
   * @param {S} previousState
   * @param {*} snapshot
   * @return {void}
   */
  componentDidUpdate(previousProps, previousState, snapshot) { }

  /**
   *
   * @param {*} error
   * @param {*} errorInfo
   * @return {void}
   */
  componentDidCatch(error, errorInfo) { }

  /**
   * Note: we can't represent Readonly<T> or Pick<T, U> types here.
   *
   * @param {(function(S, P): (S | null)) | S | null} state
   * @param {(function(): void)=} callback
   * @return {void}
   */
  setState(state, callback) { }

  /**
   *
   * @param {(!function(): void)=} callback
   * @return {void}
   */
  forceUpdate(callback) { }

  /**
   *
   * @param {(!preact.RenderableProps<P>)=} props
   * @param {S=} state
   * @param {*=} context
   * @return {preact.ComponentChild}
   */
  render(props, state, context) { }
};

/** @type {?string} */
preact.Component.displayName;

/** @type {*} */
preact.Component.defaultProps;

/** @type {preact.Context<*>} */
preact.Component.contextType;

// interface Component<P = {}, S = {}> {
//   componentWillMount ? (): void;
//   componentDidMount ? (): void;
//   componentWillUnmount ? (): void;
//   getChildContext ? (): object;
//   componentWillReceiveProps ? (nextProps: Readonly<P>, nextContext: any): void;
//   shouldComponentUpdate ? (
//     nextProps: Readonly<P>,
//     nextState: Readonly<S>,
//     nextContext: any
//   ): boolean;
//   componentWillUpdate ? (
//     nextProps: Readonly<P>,
//     nextState: Readonly<S>,
//     nextContext: any
//   ): void;
//   getSnapshotBeforeUpdate ? (oldProps: Readonly<P>, oldState: Readonly<S>): any;
//   componentDidUpdate ? (
//     previousProps: Readonly<P>,
//     previousState: Readonly<S>,
//     snapshot: any
//   ): void;
//   componentDidCatch ? (error: any, errorInfo: any): void;
// }

// Merged with the above definition: Closure Compiler does not support function overloads in externs.

// abstract class Component <P, S> {
//   constructor(props?: P, context?: any);
//
//   static displayName?: string;
//   static defaultProps?: any;
//   static contextType?: Context<any>;
//
//   // Static members cannot reference class type parameters. This is not
//   // supported in TypeScript. Reusing the same type arguments from `Component`
//   // will lead to an impossible state where one cannot satisfy the type
//   // constraint under no circumstances, see #1356.In general type arguments
//   // seem to be a bit buggy and not supported well at the time of this
//   // writing with TS 3.3.3333.
//   static getDerivedStateFromProps?(
//     props: Readonly<object>,
//     state: Readonly<object>
//   ): object | null;
//   static getDerivedStateFromError?(error: any): object | null;
//
//   state: Readonly<S>;
//   props: RenderableProps<P>;
//   context: any;
//   base?: Element | Text;
//
//   // From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e836acc75a78cf0655b5dfdbe81d69fdd4d8a252/types/react/index.d.ts#L402
//   // // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
//   // // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
//   setState<K extends keyof S>(
//     state:
//       | ((
//         prevState: Readonly<S>,
//         props: Readonly<P>
//       ) => Pick<S, K> | Partial<S> | null)
//       | (Pick<S, K> | Partial<S> | null),
//     callback?: () => void
//   ): void;
//
//   forceUpdate(callback?: () => void): void;
//
//   abstract render(
//     props?: RenderableProps<P>,
//     state?: Readonly<S>,
//     context?: any
//   ): ComponentChild;
// }

//
// Preact createElement
// -----------------------------------

/**
 * Node: JSX support is currently unimplemented.
 *
 * @param {!string | !preact.ComponentType<P> | function(P): !preact.VNode<*>} type
 * @param {(!Object<string, *> | !preact.Attributes | !P | null)=} props
 * @param {...preact.ComponentChildren} children
 * @return {!preact.VNode<*>}
 * @template P
 */
preact.createElement = function (type, props, ...children) { };

// function createElement(
// 	type: string,
// 	props:
// 		| (JSXInternal.HTMLAttributes &
// 				JSXInternal.SVGAttributes &
// 				Record<string, any>)
// 		| null,
// 	...children: ComponentChildren[]
// ): VNode<any>;

// Merged with the above definition: Closure Compiler does not support function overloads in externs.

// function createElement<P>(
// 	type: ComponentType<P>,
// 	props: (Attributes & P) | null,
// 	...children: ComponentChildren[]
// ): VNode<any>;

// JSX is not supported.

// namespace createElement {
// 	export import JSX = JSXInternal;
// }

/**
 * Node: JSX support is currently unimplemented.
 *
 * @param {!string | !preact.ComponentType<P> | function(P): !preact.VNode<*>} type
 * @param {(!Object<string, *> | !preact.Attributes | !P | null)=} props
 * @param {...preact.ComponentChildren} children
 * @return {!preact.VNode<*>}
 * @template P
 */
preact.h = function (type, props, ...children) { }

// function h(
//    type: string,
//    props:
//      | (JSXInternal.HTMLAttributes &
//          JSXInternal.SVGAttributes &
//          Record<string, any>)
//      | null,
//    ...children: ComponentChildren[]
//  ): VNode<any>;

// Merged with the above definition: Closure Compiler does not support function overloads in externs.

// function h<P>(
//   type: ComponentType<P>,
//   props: (Attributes & P) | null,
//   ...children: ComponentChildren[]
// ): VNode<any>;

// JSX is not supported at this time.

// namespace h {
//   export import JSX = JSXInternal;
// }

//
// Preact render
// -----------------------------------

/**
 * @param {preact.ComponentChild} vnode
 * @param {Element | Document | ShadowRoot | DocumentFragment} parent
 * @param {(Element | Text)=} replaceNode
 * @return {void}
 */
preact.render = function (vnode, parent, replaceNode) { }

// function render(
//   vnode: ComponentChild,
//   parent: Element | Document | ShadowRoot | DocumentFragment,
//   replaceNode?: Element | Text
// ): void;

// TODO(mbrukman)

// function hydrate(
//   vnode: ComponentChild,
//   parent: Element | Document | ShadowRoot | DocumentFragment
// ): void;

// TODO(mbrukman)

// function cloneElement(
//   vnode: VNode<any>,
//   props?: any,
//   ...children: ComponentChildren[]
// ): VNode<any>;

// TODO(mbrukman)

// function cloneElement<P>(
//   vnode: VNode<P>,
//   props?: any,
//   ...children: ComponentChildren[]
// ): VNode<P>;

//
// Preact helpers
// -----------------------------------

/**
 * @return {preact.RefObject<T>}
 * @template T
 */
preact.createRef = function () { };

// function createRef<T = any>(): RefObject<T>;

/**
 *
 * @param {preact.ComponentChildren} children
 * @return {Array<preact.VNode | string | number>}
 */
preact.toChildArray = function (children) { };

// function toChildArray(
//   children: ComponentChildren
// ): Array<VNode | string | number>;

/**
 *
 * @param {*} vnode
 * @return {boolean}
 */
preact.isValidElement = function (vnode) { }

// function isValidElement(vnode: any): vnode is VNode;

//
// Context
// -----------------------------------

/**
 * @interface
 * @extends {preact.FunctionComponent<{children: function(T): preact.ComponentChildren}>}
 * @template T
 */
preact.Consumer;

// interface Consumer<T>
//   extends FunctionComponent<{
//     children: (value: T) => ComponentChildren;
//   }> {}

/**
 * @interface
 * @extends {preact.Consumer<T>}
 * @template T
 */
preact.PreactConsumer;

// interface PreactConsumer<T> extends Consumer<T> {}

/**
 * @interface
 * @extends {preact.FunctionComponent<{value: T, children: preact.ComponentChildren}>}
 * @template T
 */
preact.Provider;

// interface Provider<T>
//   extends FunctionComponent<{
//     value: T;
//     children: ComponentChildren;
//   }> {}

/**
 * @interface
 * @extends {preact.Provider<T>}
 * @template T
 */
preact.PreactProvider;

// interface PreactProvider<T> extends Provider<T> {}

/**
 * @interface
 * @template T
 */
preact.Context = class {
  constructor() {
    /** @type {preact.Consumer<T>} */
    this.Consumer;

    /** @type {preact.Provider<T>} */
    this.Provider;
  }
};

// interface Context<T> {
//   Consumer: Consumer<T>;
//   Provider: Provider<T>;
// }

/**
 * @interface
 * @extends {preact.Context<T>}
 * @template T
 */
preact.PreactContext;

// interface PreactContext<T> extends Context<T> {}

/**
 *
 * @param {T} defaultValue
 * @return {preact.Context<T>}
 * @template T
 */
preact.createContext = function (defaultValue) { };

// function createContext<T>(defaultValue: T): Context<T>;
