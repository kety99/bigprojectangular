import {BaseEntity} from "./base-entity";
import {Package} from "./package";

export class Client extends BaseEntity{
  private _name: string | undefined;
  private _packages: Array<Package> | undefined;


  get packages(): Array<Package> | undefined {
    return this._packages;
  }

  set packages(value: Array<Package> | undefined) {
    this._packages = value;
  }

  constructor() {
    super ();
  }

  get name(): string {
    return <string>this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
