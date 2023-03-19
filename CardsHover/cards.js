document.getElementById("cards").onmousemove = e => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      // getBoundingClientRect to get position of mouse relative to top-left corner of card
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;


    // Set custom card property
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}