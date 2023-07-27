// crud.model.ts
export class CRUD<T extends { id: number }> {
    private itemsKey: string;
  
    constructor(private storageKey: string) {
      this.itemsKey = `${storageKey}_items`;
    }
  
    getItems(): T[] {
      const items = localStorage.getItem(this.itemsKey);
      return items ? JSON.parse(items) : [];
    }
  
    getItem(id: number): T | undefined {
      const items = this.getItems();
      return items.find((item: T) => 'id' in item && item['id'] === id);
      
    }
  
    addItem(item: T): void {
      const items = this.getItems();
      items.push(item);
      localStorage.setItem(this.itemsKey, JSON.stringify(items));
      
  
    }
  
  
    updateItem(item: T): void {
      const items = this.getItems();
      const index = items.findIndex((el: T) => 'id' in el && el['id'] === item['id']);
      if (index !== -1) {
        items[index] = item;
        localStorage.setItem(this.itemsKey, JSON.stringify(items));
      }
    }
  
    deleteItem(id: number): void {
      const items = this.getItems();
      const updatedItems = items.filter((item: T) => 'id' in item && item['id'] !== id);
      localStorage.setItem(this.itemsKey, JSON.stringify(updatedItems));
    }
  }
  