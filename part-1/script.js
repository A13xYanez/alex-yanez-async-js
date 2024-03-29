/*
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
*/


// Using too many callbacks can result in "callback hell" as seen below
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
   

// Practice
function step1(string, callback) {
  const result = "Hello" + string;
  callback(result);
}

function step2(string, callback) {
  const result = string + "world";
  callback(result);
}

function operation() {
  // Gets the result from the function step1 and sends it to the function step2
  step1(" ", (result1) => {
    // Gets the result from the function step 2 and sends it to be console logged
    step2(result1, (result2) => {
      console.log(`result: ${result2}`);
    });
  });
}
