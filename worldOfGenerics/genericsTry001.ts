namespace genericsTry001 {

    function pleaseStick_3(varFirst: number, varSecond: number ): number {
        return varFirst + varSecond
    }

    console.log("I sticked, I get: ", pleaseStick_3(5,3))

    /* This version will be transpiled to javascript
        Because we try to use a type strin and a type number

    function pleaseStick_2(varFirst: number, varSecond: number ): number {
        return varFirst + varSecond
    }

    console.log("I sticked, I get: ", pleaseStick_2("lolo",3))
    
    */
   function pleaseStick_1(varFirst: any, varSecond: any ): any {
       return varFirst + varSecond
   }

    console.log("I sticked, I get: ", pleaseStick_1("lolo",3))

    function pleaseStick<T>(varFirst: T, varSecond: T ): T {
        
        /* This code is not possible because we use 'Type variable'
        return varFirst + varSecond
         */

         let aNumber: any
         let aString: any

         if (typeof(varFirst) === "number" && typeof(varSecond) === "number" ) {
            aNumber=varFirst+varSecond
            console.log("Humm Number, I get: ", aNumber)
         }
         else if (typeof(varFirst) === "string" && typeof(varSecond) === "string" ) {
            aString=varFirst+varSecond
            console.log("Humm String, I get: ", aString)
         }
         return varSecond
    }
    console.log("I cannot stick, I get: ", pleaseStick("lolo","lulu"))
    console.log("I cannot stick, I get: ", pleaseStick(5,6))
}
