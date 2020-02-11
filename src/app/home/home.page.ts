import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {

  private color = '#46ff30';

  canvas: HTMLCanvasElement;

  constructor() {}

  ngAfterContentInit() {
    this.init();
  }

  private init(): void {
    this.canvas = document.getElementById('main') as HTMLCanvasElement;
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    document.body.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.canvas.getContext) {
        const ctx = this.canvas.getContext('2d');
        const X = e.x;
        const Y = e.y;
        const R = 10;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.stroke();
      } else {
        console.error('err');
      }
    }, true);
  }

}
