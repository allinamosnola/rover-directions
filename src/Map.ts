import { Direction } from "./Direction";
import { Point } from "./Point";

const MAX_Y = 10
const MAX_X = 10

export class Map {
    constructor(private obstacles?: Point[]) {}

    moveNext(position: Point, direction: Direction): Point {
        let y = position.y
        let x = position.x
        if (direction.toString() === 'N') y = (y + 1) % MAX_Y
        if (direction.toString() === 'E') x = (x + 1) % MAX_X
        if (direction.toString() === 'S') y = y === 0 ? MAX_Y - 1 : (y - 1)
        if (direction.toString() === 'W') x = x === 0 ? MAX_X - 1 : (x - 1)
        this.validateNewPointIsNotAnObstacle(y, x)
        return new Point(y, x)
    }

    private validateNewPointIsNotAnObstacle(y: number, x: number): void {
        if (this.obstacles?.some(obstacle => obstacle.y === y && obstacle.x === x)) throw new Error('Inminent Collision')
    }
}