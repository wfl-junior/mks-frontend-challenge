export class LocalStorageMock {
  store: Record<string, string> = {};

  setItem(key: string, value: any) {
    this.store[key] = String(value);
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}
