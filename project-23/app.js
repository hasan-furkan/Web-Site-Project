function changeColor() {
    let text = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color = color + text[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.getElementById("title").innerHTML = color;
  }
  