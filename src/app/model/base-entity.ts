export class BaseEntity{
  private _id: number | undefined;


  constructor() {
  }


  get id(): number {
    return <number>this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
