import { PIXEL_SIZE } from "../constants";
import { randomColor } from "../utils/randomColor";

class Canvas {
  private canvas: HTMLCanvasElement;
  private width: number;
  private height: number;
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  private clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  private fill(x: number, y: number) {
    this.context.fillStyle = randomColor();
    this.context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  }

  public draw() {
    this.clear();
    for (let i = 0; i <= this.height; i += PIXEL_SIZE) {
      for (let j = 0; j <= this.width; j += PIXEL_SIZE) {
        this.fill(j, i);
      }
    }
  }
}

export default Canvas;
