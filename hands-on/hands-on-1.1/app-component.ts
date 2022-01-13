import { Component } from "@angular/core";
import { Observable } from "rxjs";

const myObservable = new Observable((observer) => {
  let count = 0;

  setInterval(() => {
    if (count > 10) observer.complete();
    observer.next(count);
    count++;
  }, 1000);
});

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Hands-on-1.1: Create an Observable in Angular";

  mySubscription = myObservable.subscribe({
    next: (data) => console.log(data),
    error: (e) => console.error(e),
    complete: () => console.info("complete"),
  });
}
