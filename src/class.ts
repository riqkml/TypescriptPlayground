export class User {
  public name: string;

  constructor(name: string, public age?: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

let user = new User("riqki kamal");
user.age = 21;
console.log("inside class " + user.name + " berumur " + user.age);

//public = dapat diaksses di semua class
//protected = dapat diakses dari class tersebut, dan turunannya
//private = hanya dapat diakses dari class tersebut

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  //static property
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age?: number) {
    super(name, age);
    this.phone = phone;
  }
  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let adm = new Admin("08127312", "riqki");
adm.setName("amrela");
console.log("nama terbaru", Admin.getRoleName);
