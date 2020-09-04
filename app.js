// global variable
// self invoked function
// built in event
//(function() {})();
//
// global global variable
let x = "GlobalGlobal";
let xx = false;
// self invoked function
(function () {
  const y = () => {
    document.querySelector("#id1").innerHTML = x;
    console.log("stage1");
  };

  const var1 = document.querySelector("#btn1");
  var1.addEventListener("click", (e) => {
    y();
  });

  const event = new CustomEvent("changeNameAndColor", {
    detail: { color: "blue", name: "Pedram" },
  });

  document.addEventListener("changeNameAndColor", (event) => {
    let color = event.detail.color;
    document.querySelector("#id2").style.color = color;
  });
  document.addEventListener("changeNameAndColor", (event) => {
    let name = event.detail.name;
    document.querySelector("#id2").innerHTML = name;
  });
  document.getElementById("btn2").addEventListener("click", () => {
    document.dispatchEvent(event);
  });
  document.getElementById("btn3").addEventListener("click", () => {
    xx = true;
  });
  document.getElementById("btn4").addEventListener("click", () => {
    xx = false;
  });
  document.getElementById("btn5").addEventListener("click", () => {
    document.querySelector("#id3").innerHTML = xx;
  });
})();
