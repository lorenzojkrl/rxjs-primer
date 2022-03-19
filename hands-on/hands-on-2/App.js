import React, { useState, useEffect } from 'react';
import './style.css';
import { interval } from 'rxjs';

export default function App() {
  const [state, setState] = useState();

  const observable$ = interval(1000);

  useEffect(() => {
    const subscription = observable$.subscribe((value) => setState(value));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Hello RxJS!</h1>
      <p>Observable value: {state}</p>
    </div>
  );
}
