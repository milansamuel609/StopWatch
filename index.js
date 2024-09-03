var canvas = document.getElementById("stopwatch");
var ctx = canvas.getContext("2d");
var startTime;
var running = false;

function drawCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(40, 50, 500, 300);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    var elapsedTime = running ? (Date.now() - startTime) : 0;
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    var milliseconds = elapsedTime % 1000;
    ctx.fillText(
      pad(minutes) + ":" + pad(seconds) + ":" + padMilliseconds(milliseconds),
      235,
      200
    );
  }

  function pad(value) {
    return value < 10 ? "0" + value : value;
  }

  function padMilliseconds(value) {
    return ("00" + value).slice(-2);
  }
  
   

  function startStopwatch() {
    if (!running) {
      startTime = Date.now();
      running = true;
      updateStopwatch();
    }
  }

  function pauseStopwatch() {
    running = false;
  }

  function restartStopwatch() {
    if (!running) {
      startTime = Date.now();
      drawCanvas();
    }
  }

  function updateStopwatch() {
    if (running) {
      drawCanvas();
      requestAnimationFrame(updateStopwatch);
    }
  }

  drawCanvas();