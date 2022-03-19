import { interval } from 'rxjs';

const myObservable = interval(1000);

myObservable.subscribe((integer) => {
  console.log(integer);
});

// Solution
// the observable complete if the value of integer is >= 10
myObservable.subscribe((integer) => {
  integer < 10 ? console.log(integer) : () => {};
});
