# rxjs-primer

1. [What is RxJS](https://github.com/lorenzojkrl/rxjs-primer/edit/main/README.md#1-what-is-rxjs)
2. [Why RxJS? RxJS vs Promises](https://github.com/lorenzojkrl/rxjs-primer/edit/main/README.md#2-why-rxjs-rxjs-vs-promises)
3. TBD

## 1. What is RxJS

RxJS stands for Reactive Extensions for JavaScript and it is a JavaScript library.
<p>According to the <a href="https://rxjs.dev/guide/overview" target="_blank" rel="noreferrer noopener">official documentation</a>, "<em>RxJS is a library for composing asynchronous and event-based programs by using observable sequences</em>".</p>

<p>In other words, RxJS is a library that helps us manage and manipulate data over time. </p>

### Example

<p>Peaches on a conveyor belt create a stream of peaches. We don't know how many peaches we will get over some time, or when they will stop coming. However, we may want to do some operations on those peaches. For instance,filter the good ones from the bad ones. </p>

<p>In the world of RxJS, the peaches are data that we may want to manipulate. A stream of data is called an Observable stream. </p>

<p>We don't know how many "pieces of data" we will receive over a period of time, or when we will stop receiving data. However, RxJS offers an extensive set of operators to manipulate data.</p>

### Why do we need RxJS to manipulate data?

<p>Briefly, we could argue that this library offers several advantages compared to traditional techniques like Promises or async/await.  </p>

<p>In particular, RxJS can produce multiple values over time and it uses a push model to notify the application when specific events occur. This is at the core of reactive programming.</p>

<p>Moreover, it is possible to cancel async operations before they terminate, unlike Promises.</p>

### What is Reactive Programming?
<p>From a theoretical point of view, <a href="https://en.wikipedia.org/wiki/Reactive_programming" target="_blank" rel="noreferrer noopener">Wikipedia</a> defines reactive programming as "<em>a declarative programming paradigm concerned with data streams and the propagation of change</em>".</p>

<p>In other words, Reactive programming is simply programming with asynchronous data streams. Anything can be a stream: variables, user inputs, data structure, etc. Therefore, it is possible to listen to the stream and react appropriately.</p>

<p>When we combine the functional paradigm with reactive programming we want to dynamically specify the behavior of values when we declare them. </p>

<p>Thanks to <a href="https://rxjs.dev/guide/operators" target="_blank" rel="noreferrer noopener">RxJS operators</a>, we get a set of tools to merge, filter, and manipulate data streams.</p>

### Key Points
- RxJS is a library to handle data over time
- Some advantages over traditional techniques include the possibility to produce multiple values over time and cancel async operations
- Reactive programming is programming with asynchronous data streams.

## 2. Why RxJS? RxJS vs Promises

RxJS is a library that helps us manage and manipulate data over time. This often involves asynchronous operations.

<p>Despite there being other techniques for managing asynchronous and event-based data, we may want to use RxJS.</p>

<p>Let's briefly review some of the traditional techniques to handle asynchronous and event-based data. After that, we compare those techniques with RxJS.</p>

### Traditional techniques

#### Callbacks Functions

<p>Call back a function after an asynchronous operation completes. Callbacks can be difficult to manage when working with many async operations or when those operations are nested into each other. You may want to avoid callbacks hell. </p>

#### Promises

<p>"<em>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value</em>", <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer noopener">MDN</a>. However, a promise can only handle one single value and it is not cancellable.</p>

#### Async/await

<p>"<em>The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains</em>", <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noreferrer noopener">MDN</a>.</p>

<p>As reported on MDN, the "<em>purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.</em>" Therefore, async/await is based on Promises and this syntax has the same characteristics as Promises. </p>

<p>Async/await can only handle a single emission and it is not cancellable. </p>

### RxJS (Observables) vs Promises

<p>Despite not having introduced Observables yet, we can think of Observables as "the Promises of RxJS". For the moment, this is sufficient.</p>

<p>Since RxJS is a library, it is not possible to compare RxJS with Promises. However, it is possible to compare "the Promises of RxJS", i.e. Observables, with traditional Promises.</p>

<p>As reported by <a href="https://angular.io/guide/comparing-observables#observables-compared-to-promises" target="_blank" rel="noreferrer noopener">angular.io</a>, there are some key differences between Observables and Promises.</p>

<p>While Promises return one value, Observables can provide more than one. "<em>This makes observables useful for getting multiple values over time</em>". </p>

<p>While Promises execute on creation, Observables won't start to execute until we want them to start. To invoke an Observable and get one or more values we need to <em>subscribe</em> to it. Observables are lazy, Promises are not.</p>

<p>There are more differences, but these are enough to draw some conclusions on why RxJS might be preferred over traditional Promises.</p>

### Key Points 
- One library for many purposes. We can use one library to work with any type of data using the same operators. e.g. multiple data sources, events emitters, and APIs. 
- Composition. It is possible to combine data from several sources as we like.  
- Watchful. RxJS can produce multiple values over time and it uses a push model to notify us when specific events occur. This allows for reactive programming as it is possible to watch and react to users actions and changes. 
- Lazyness. Evaluation doesn't start until subscription. 
- Built-in errors handling
- Cancellable. Unlike Promises, it is possible to cancel async actions.

## 3. 
