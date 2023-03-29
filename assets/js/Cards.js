class Cards {
  constructor() {
    this.positionSectionTips = document.getElementById("section-tips");
    this.cardEsq = document.querySelector(".card-esq");
    this.cardDir = document.querySelector(".card-dir");
  }

  scrollCards() {
    window.requestAnimationFrame(this.calcScroll.bind(this));
  }

  calcScroll() {
    const position = this.positionSectionTips.getBoundingClientRect()["y"];
    if (position >= 25) {
      this.cardEsq.style.transform = `translate(${(-position + 25) / 10}%)`;
      this.cardDir.style.transform = `translate(${(position - 25) / 10}%)`;
    }
  }
}

export { Cards };
