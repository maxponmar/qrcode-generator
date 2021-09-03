var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 128,
  height: 128,
});

function makeCode() {
  var userInput = document.getElementById("input");

  if (!userInput.value) {
    // alert("Input a text");
    userInput.focus();
    return;
  }

  qrcode.makeCode(userInput.value);
}

makeCode();

$("#input")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
