// global variable
// self invoked function
// built in event
//(function() {})();
//
// global global variable
let globalVariable = "This is global";
let cold = false;
// self invoked function
(function () {
  const y = () => {
    document.querySelector("#id1").innerHTML = globalVariable;
  };

  document.querySelector("#btn1").addEventListener("click", (e) => {
    y();
  });

  const change_name_color = new CustomEvent("changeNameAndColor", {
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
    document.dispatchEvent(change_name_color);
  });
  document.getElementById("btn3").addEventListener("click", () => {
    cold = true;
  });
  document.getElementById("btn4").addEventListener("click", () => {
    cold = false;
  });
  document.getElementById("btn5").addEventListener("click", () => {
    document.querySelector("#id3").innerHTML = cold;
  });
})();
