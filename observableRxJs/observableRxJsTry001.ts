import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

namespace obsRxJsSimpleSubscriber {
    
        let tableau: Array<number> = [1,2,3];

        console.log(tableau.filter(x=> x>2))
        

        let monObservable = new Observable((observer) => {
            let listOfFriends = ["Damien", "Thomas", "Jean-Claude Dusse"];
            listOfFriends.forEach((friend: string) => {
                observer.next(friend);
            })
            observer.complete();
        });


        monObservable.subscribe({
            next(value) { console.log(value); },
            complete() { console.log("C'est fini!");
        }

    });

}
