class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const div = document.createElement("div");
    document.querySelector("#game-board-underlay").appendChild(div);
    div.setAttribute("value", this.id);
    div.className = "token";
    div.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    const token = document.querySelector(".token");
    return token;
  }
}
