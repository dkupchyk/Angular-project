import {last} from "rxjs/operators";

export class User {
  static freeId: number = 1;

  private id: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public email: string;
  public password: string;

  constructor() {
    this.id = User.freeId;
    User.freeId++;
  }


  // private id: string;
  // private _token: string;
  // private _tokenExpirationDate: Date;

  // get token() {
  //   if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
  //     return null;
  //   }
  //   return this._token;
  // }

  // set firstName(name: string) {
  //   this._firstName = name;
  // }
  //
  // set lastName(name: string) {
  //   this._lastName = name;
  // }
  //
  // set dateOfBirth(date: Date) {
  //   this._dateOfBirth = date;
  // }
  //
  // set email(name: string) {
  //   this._email = name;
  // }
  //
  // set password(name: string) {
  //   this._password = name;
  // }
}
