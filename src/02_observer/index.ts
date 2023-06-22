import { MeteoSensorsAPI } from "./subject";
import { WeatherDisplay, Termometer } from "./observer";

/**
 * The client code.
 */

const subject = new MeteoSensorsAPI();

const observer1 = new WeatherDisplay();
subject.addObserver(observer1);

const observer2 = new Termometer();
subject.addObserver(observer2);

subject.getWeatherData();
subject.getWeatherData();

subject.detach(observer2);

subject.getWeatherData();
