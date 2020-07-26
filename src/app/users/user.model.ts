export class User {
  public firstName: string;
  public lastName: string;
  public city: string;
  public age: number;

  constructor(firstName: string, lastName: string, city: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }

}
