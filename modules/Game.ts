'use client';

class Game {
  _now: number;
  _fps = 60;

  constructor() {
    this._now = +new Date();

    this.update();
  }

  update() {
    const now = +new Date();
    const delta = now - this._now;
    this._now = now;

    console.log(delta);
    this._fps = Math.floor(1000 / delta);

    requestAnimationFrame(this.update.bind(this));
  }
}
export default Game;
