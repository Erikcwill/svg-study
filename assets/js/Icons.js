class Icons {
  constructor() {
    this.listIcons = document.querySelectorAll(".icon");
  }

  animaIcons() {
    TweenMax.to(this.listIcons, 3, { scale: 0.95, repeat: -1, yoyo: true });
  }
}

export { Icons };
