import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

namespace obsRxJsMultipleSubscriber {
    
        let monObservable$ = new Observable((observer) => {
            let listOfFriends = ["Damien", "Thomas", "Jean-Claude Dusse"];
            listOfFriends.forEach((friend: string) => {
                observer.next(friend);
            })
            observer.complete();
        });


        monObservable$.subscribe({
            next(value) { console.log(value); },
            complete() { console.log("C'est fini!"); }
        });

        setTimeout(() => {
            monObservable$.subscribe({
                next(value) { console.log(value + '2'); },
                complete() { console.log("C'est fini! 2"); }
            });
        }, 2000);

}
