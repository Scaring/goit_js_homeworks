'use strict';

// Напиши класс Car с указанными свойствами и методами.

class Car {
  static getSpecs(car) {
    const { maxSpeed, speed, isOn, distance, price } = car;
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
    );
  }

  constructor(Object) {
    this._price = Object.price;
    this.maxSpeed = Object.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
//maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000`

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff(); //В умові завдання зазначено, що під час виклику метода turnOff() ***Записывает в свойство isOn значение false,
// и сбрасывает текущую скорость в 0*** тобто в коменті нижче ***speed: 30*** ПОМИЛКА!!!

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
// тут мало б бути ***speed: 0***

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
