/*
 * @author devpav
 */

class Optional<T> {
  private static readonly defaultObject = new Optional(null);

  private readonly currentValue: T;

  public static of<T>(obj: T): Optional<T> {
    if (!obj) {
      throw new Error(`object ${typeof obj} mustn't be NULL or undefined`);
    }
    return new Optional<T>(obj);
  }

  public static empty<T>(): Optional<T> {
    return this.defaultObject;
  }

  public static ofNullable<T>(obj: T) {
    return new Optional<T>(obj);
  }

  private constructor(obj: T) {
    this.currentValue = obj;
  }

  public map <V>(func: (value: T) => V): Optional<V> {
    if (this.currentValue) {
      return Optional.ofNullable(func(this.currentValue));
    }
    return Optional.empty();
  }

  public get(): T {
    return this.currentValue;
  }

  public isPresent(): boolean {
    return !!this.currentValue;
  }

  public isNonPresent(): boolean {
    return !this.currentValue;
  }

  public ifPresent(func: (value: T) => void): void {
    if (this.currentValue) {
      func(this.currentValue);
    }
  }

  public orElse(otherObj: T) {
    return this.currentValue ? this.currentValue : otherObj;
  }

  public orElseGet(func: () => T): T {
    return func();
  }

  public empty(): Optional<T> {
    return Optional.defaultObject;
  }
}

export default Optional;
