import { interval } from 'rxjs';

const myObservable = interval(1000);

myObservable.subscribe((integer) => {
  console.log(integer);
});
