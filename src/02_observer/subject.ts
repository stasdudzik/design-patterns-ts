import { Observer } from "./observer";

/**
 * The Subject interface declares a set of methods for managing subscribers.
 * In our book example it's a company (API) providing data from various weather sensors
 * including Temperature, Humidity and Pressure
 */
export interface Subject {
  // Attach an observer to the subject.
  addObserver(observer: Observer): void;

  // Detach an observer from the subject.
  detach(observer: Observer): void;

  // Notify all observers about an event.
  notify(): void;
}

interface WeatherData {
  temperature: number;
  pressure: number;
  humidity: number;
}

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export class MeteoSensorsAPI implements Subject {
  /**
   * @type {number} For the sake of simplicity, the Subject's state, essential
   * to all subscribers, is stored in this variable.
   */
  public state: WeatherData;

  /**
   * @type {Observer[]} List of subscribers. In real life, the list of
   * subscribers can be stored more comprehensively (categorized by event
   * type, etc.).
   */
  private observers: Observer[] = [];

  /**
   * The subscription management methods.
   */
  public addObserver(observer: Observer): void {
    const exists = this.observers.includes(observer);
    if (exists) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  /**
   * Trigger an update in each subscriber.
   */
  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  /**
   * Usually, the subscription logic is only a fraction of what a Subject can
   * really do. Subjects commonly hold some important business logic, that
   * triggers a notification method whenever something important is about to
   * happen (or after it).
   */
  public getWeatherData(): void {
    console.log("\nSubject: I'm getting fresh weather data from sensors.");
    this.state = {
      temperature: Math.floor(Math.random() * 40),
      pressure: Math.floor(Math.random() * 1000),
      humidity: Math.floor(Math.random() * 200),
    };

    console.log(
      `Subject: My state has just changed to: ${JSON.stringify(this.state)}`
    );
    this.notify();
  }
}
