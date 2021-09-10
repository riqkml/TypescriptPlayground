class List<T> {
  private data: T[];

  constructor(...element: T[]) {
    this.data = element;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...element: T[]) {
    this.data.push(...element);
  }
  getAll(): T[] {
    return this.data;
  }
}

let list = new List<number>(1, 2, 3);
console.log(list);
