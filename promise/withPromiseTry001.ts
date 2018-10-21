namespace withPromiseTry001 {

    type Callback = (error?: Error, data?: number) => void; 
    
    function getData(callback: Callback) { 
        setTimeout(function setTimeoutCB(counter: number) { 
            if (Math.random() < 0.25) { 
                callback(new Error("Error in retrieving data.")); 
            } 
            else { 
                let data = Math.random(); 
                callback(undefined, data); 
            } 
        }, 500); 
    } // getData


    type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void; 
    type PromiseReject = (error?: any) => void; 

    
    function getDataPromise() { 
        return new Promise((resolve: PromiseResolve<number>, reject: PromiseReject): void => { 
            getData((error, data) => { 
                if (error) reject(error) 
                else resolve(data) 
            }); 
        }); 
    } // getDataPromise



    getDataPromise() 
        .then( 
            data => { // resolve() 
                console.log("Process 1:", data); 
                return getDataPromise(); 
            }, 
            error => { // reject() 
                console.log(error); 
            }) 
        .then( 
            data => { // resolve() 
                console.log("Process 2:", data); 
                return getDataPromise(); 
            }, 
            error => { // reject() 
                console.log(error); 
            }) 
        .then( 
            data => { // resolve() 
                console.log("Process 3:", data); 
            }, 
            error => { // reject() 
                console.log(error); 
            })
    ;

}
