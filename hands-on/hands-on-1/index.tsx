import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Observable } from 'rxjs';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  myObservable: Observable<any> = new Observable((observer) => {
    let count = 0;

    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);
  });

  render() {
    this.myObservable.subscribe((x) => console.log(x));

    return (
      <div>
        <h1>Hands-on-1: Create an Observable in React </h1>
        <p>Open the console to see the counter</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
