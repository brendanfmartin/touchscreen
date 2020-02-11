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

    // document.body.addEventListener('mousedown', (e) => this.listener(e));
    // document.body.removeEventListener('mouseup', (e) => this.listener(e));


    const body = document.querySelector('body')
    const clickTarget = document.getElementById('click-target')
    const mouseOverTarget = document.getElementById('mouse-over-target')

    let toggle = false;
    function makeBackgroundYellow() {
      if (toggle) {
        body.style.backgroundColor = 'white';
      } else {
        body.style.backgroundColor = 'yellow';
      }

      toggle = !toggle;
    }

    clickTarget.addEventListener('click',
      makeBackgroundYellow,
      false
    );

    mouseOverTarget.addEventListener('mouseover', function () {
      clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
      );
    });

  }

  private listener(eO: MouseEvent): void {
    eO.preventDefault();
    document.body.addEventListener('mousemove', (e) => this.drawing(e));
  }

  private drawing(e: MouseEvent): void {
    console.log(e);
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
  }

}
