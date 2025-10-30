console.log("promices");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        resolve("happy diwali");
    } else {
        reject("boom");
    }
});

prom1
    .then((e) => {
        console.log(e);
    })
    .catch((err) => {
        console.log(err);
    });

prom1.then(alert);

// In a browser: prom1.then(alert) is equivalent to prom1.then(value => alert(value)); when the promise fulfills the browser will show an alert with the resolved value (e.g. "happy diwali"). The alert call returns undefined, so the promise returned by then resolves to undefined.
// Rejections are not handled by then(alert) (no onRejected provided), so your .catch(...) will still run if prom1 rejects.
// In Node.js there is no alert, so prom1.then(alert) will throw ReferenceError: alert is not defined.


function getdata(dataId, nextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            console.log("data", dataId);
            if (typeof nextData === "function") nextData();

            //reject("errror")
            
        }, 6000);
        resolve("success");
    })
}