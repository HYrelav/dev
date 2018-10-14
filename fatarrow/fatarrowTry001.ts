
namespace fatArrow001 {
    /*
        Learning
        What: Fat Arrow =>
        Level: try
        Exercice: 001
        Target: Discovery
    */
    
        /* Source:
        https://codecraft.tv/courses/angular/es6-typescript/arrow/
    */

    /* Anonymous function ... */
    setTimeout(function() {
	    console.log("setTimeout called!");
    }, 1000);

    /* ... can use fat arrow syntax */
    setTimeout(() => {
        console.log("setTimeout called!")
    }, 1000);

     /* If the function only contains one expression 
        we can drop the braces and shorten even further */

    setTimeout(() => console.log("setTimeout called!"), 1000);

    /* Context "this" */

    let add = (a: number,b: number) => a + b;

    console.log(add(1,2));

    let obj = {
        name: "Albert",
        sayLater: function() {
            setTimeout(() => console.log(`${this.name}`), 1000)
        }
    };
    obj.sayLater();
}
