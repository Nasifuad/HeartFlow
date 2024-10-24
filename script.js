const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const xpos = e.clientX;
  const ypos = e.clientY;
  const rand = Math.random() * 100;
  console.log(xpos, ypos);
  console.log(xpos, ypos);
  const newdiv = document.createElement("div");

  newdiv.style.left = xpos + "px";
  newdiv.style.top = ypos + "px";
  newdiv.style.width = `${rand}px`;
  newdiv.style.height = `${rand}px`;
  body.appendChild(newdiv);
  setTimeout(() => {
    newdiv.remove();
  }, 3000);
});
