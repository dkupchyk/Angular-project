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
}
