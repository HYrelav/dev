
namespace withoutPromiseTry001 {

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


    function process1() { 
        getData((error, data) => { 
            if (error) 
                console.log(error); 
            else { 
                console.log("Process 1:", data); 
                process2(); 
            } 
        }); 
    } // process1

    function process2() { 
        getData((error, data) => { 
            if (error) 
                console.log(error); 
            else { 
                console.log("Process 2:", data); 
                process3(); 
            } 
        }); 
    } // process2 
      
    function process3() { 
        getData((error, data) => { 
            if (error) 
                console.log(error); 
            else { 
                console.log("Process 3:", data); 
            } 
        }); 
    } // process3

    process1();
}
