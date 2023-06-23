import { MeteoSensorsAPI, Subject } from "./subject";

/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface Observer {
  // Receive update from subject.
  update(subject: Subject): void;
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
export class WeatherDisplay implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof MeteoSensorsAPI) {
      console.log(`Weather Display: ${JSON.stringify(subject.state)}`);
    }
  }
}

export class Termometer implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof MeteoSensorsAPI) {
      console.log(
        `Termometer: Temperature now is ${subject.state.temperature}`
      );
    }
  }
}
