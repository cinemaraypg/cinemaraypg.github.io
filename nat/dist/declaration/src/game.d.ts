import { Engine, Scene } from "@babylonjs/core";
export default class Game {
    engine: Engine;
    canvas: HTMLCanvasElement;
    scene: Scene;
    /**
     * Constructor
     */
    constructor();
    /**
     * Runs the game
     */
    run(): void;
}
