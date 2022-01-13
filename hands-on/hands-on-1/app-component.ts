import { Component } from '@angular/core';
import { Observable } from 'rxjs';

const myObservable = new Observable((observer) => {
  let count = 0;

  setInterval(() => {
    observer.next(count);
    count++;
  }, 1000);
});

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hands-on-1: Create an Observable';

  mySubscription = myObservable.subscribe((data) => console.log(data));
}
