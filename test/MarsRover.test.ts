import { Rover } from "../src/Rover";
import { Map } from "../src/Map";
import { Point } from "../src/Point";

describe('Mars Rover Teest', () => {
    it('Should initialize the rover', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('')).toBe('0,0:N');
    });
    it('Should rotate the rover 90 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('R')).toBe('0,0:E');
    });
    it('Should rotate the rover 180 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RR')).toBe('0,0:S');
    });
    it('Should rotate the rover 270 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RRR')).toBe('0,0:W');
    });
    it('Should rotate the rover 360 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RRRR')).toBe('0,0:N');
    });
    it('Should rotate the rover left 90 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('L')).toBe('0,0:W');
    });
    it('Should rotate the rover left 360 degrees', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('LLLL')).toBe('0,0:N');
    });
    it('Should move one position up', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('M')).toBe('1,0:N');
    });
    it('Should move two positions up', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('MM')).toBe('2,0:N');
    });
    it('Should move one position right', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RM')).toBe('0,1:E');
    });
    it('Should move south two position', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('MMMRRMM')).toBe('1,0:S');
    });
    it('Should move the rover west two position', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RMMMLLMM')).toBe('0,1:W');
    });
    it('Should wrap the map when going north', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('MMMMMMMMMMM')).toBe('1,0:N');
    });
    it('Should wrap the map when going south', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RRM')).toBe('9,0:S');
    });
    it('Should wrap the map when going right', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('RMMMMMMMMMM')).toBe('0,0:E');
    });
    it('Should wrap the map when going left', () => {
        const map = new Map()
        const rover = new Rover(map)
        expect(rover.execute('LMM')).toBe('0,8:W');
    });
    it('Should detect and inform an obstacle', () => {
        const obstacle = new Point(1,0)
        const map = new Map([obstacle])
        const rover = new Rover(map)
        expect(rover.execute('M')).toBe('0,0:N,Obstacle!');
    });
});
