function calcButton(a) {
  document.getElementById("result").innerText += a;
}

function addPoint() {
  document.getElementById("result").innerText += ".";
}

function calcMinus() {
  text = document.getElementById("result").innerText;
  if (
    text.includes("-") ||
    text.includes("+") ||
    text.includes("/") ||
    text.includes("*")
  ) {
    showResult();
  } else {
    document.getElementById("result").innerText += "-";
  }
}

function calcPlus() {
  text = document.getElementById("result").innerText;
  if (
    text.includes("-") ||
    text.includes("+") ||
    text.includes("/") ||
    text.includes("*")
  ) {
    showResult();
  } else {
    document.getElementById("result").innerText += "+";
  }
}

function calcMultiply() {
  text = document.getElementById("result").innerText;
  if (
    text.includes("-") ||
    text.includes("+") ||
    text.includes("/") ||
    text.includes("*")
  ) {
    showResult();
  } else {
    document.getElementById("result").innerText += "*";
  }
}

function calcDevide() {
  text = document.getElementById("result").innerText;
  if (
    text.includes("-") ||
    text.includes("+") ||
    text.includes("/") ||
    text.includes("*")
  ) {
    showResult();
  } else {
    document.getElementById("result").innerText += "/";
  }
}

function showResult() {
  document.getElementById("result").innerText = eval(
    document.getElementById("result").innerText
  );
}
