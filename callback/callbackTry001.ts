namespace callbackTry001 {
    
    function hello(onBefore: any, onAfter: any) {
        if(onBefore) {
            onBefore();
        }
        console.log("Midday, time for lunch!");
        if(onAfter) {
            onAfter();
        }
    }
        // On appel la fonction
        hello(
            function(){
                console.log("Good morning!");
            },
            function(){
                console.log("Good afternoon!");
            }
        )

}
