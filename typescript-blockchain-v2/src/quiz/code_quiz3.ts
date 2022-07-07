/*
    LocalStorageAPI
    localStorage.setItem(<key>, <value>)
    localStorage.getItem(<key>)
    localStorage.clearItem(<key>)
    localStorage.clear()
    https://developer.mozilla.org/en-US/docs/Web/API/Storage

    GeolocationAPI
    geolocation.getCurrentPosition(successFn);
    geolocation.getCurrentPosition(successFn, errorFn);
    geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
    geolocation.watchPosition(success);
    geolocation.watchPosition(success, error);
    geolocation.watchPosition(success, error, options);
    geolocation.clearWatch(id);
    https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
 */

// Use abstract classes and generics.
const log = console.log;

interface SStorage<T> {
    [key: string]: T
}

interface LocalStorageAPI<T> {
    storage: SStorage<T>
    setItem(key: string, value: T): void
    getItem(key: string): T
    clearItem(key: string): void
    clear(): void
}

class LocalStorage<T> implements LocalStorageAPI<T> {
    storage: SStorage<T> = {}
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }
    getItem(key: string): T {
        return this.storage[key];
    }
    clearItem(key: string) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.setItem("key", "string value");
log(`stringsStorage.getItem("key"): ${stringsStorage.getItem("key")}`);
stringsStorage.setItem("key2", "string value2");
stringsStorage.clearItem("key");
log(`stringsStorage.getItem("key"): ${stringsStorage.getItem("key")}`);
log(`stringsStorage.getItem("key2"): ${stringsStorage.getItem("key2")}`);
stringsStorage.clear();
log(`stringsStorage.getItem("key"): ${stringsStorage.getItem("key")}`);


// ========================================================================= //


// Geolocation Interface
type GeolocationCoords = {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    altitudeAccuracy: number;
    heading: number;
    speed: number;
  };
  type Position = {
    coords: GeolocationCoords;
  };
  type GeoError = {
    code: number;
    message: string;
  };
  type SuccessFunction = (position: Position) => void;
  type ErrorFunction = (error: GeoError) => void;
  type GeoOptions = {
    maximumAge: number;
    timeout: number;
    enableHighAccuracy: boolean;
  };
  
  type GetCurrentPosition = {
    (success: SuccessFunction): void;
    (success: SuccessFunction, error: ErrorFunction): void;
    (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
  };
  
  type WatchCurrentPosition = {
    (success: SuccessFunction): number;
    (success: SuccessFunction, error: ErrorFunction): number;
    (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
  };
  
  interface GeolocationAPI {
    getCurrentPosition: GetCurrentPosition;
    watchPosition: WatchCurrentPosition;
    clearWatch: (id: number) => void;
  }
  
  class Geolocator implements GeolocationAPI {
    getCurrentPosition: GetCurrentPosition = (
      success: SuccessFunction,
      error?: ErrorFunction,
      options?: GeoOptions
    ) => {
      return; // Implementation goes here :)
    };
    watchPosition: WatchCurrentPosition = (
      success: SuccessFunction,
      error?: ErrorFunction,
      options?: GeoOptions
    ) => {
      return 1; // Implementation goes here :)
    };
    clearWatch = (id: number) => {};
  }
  