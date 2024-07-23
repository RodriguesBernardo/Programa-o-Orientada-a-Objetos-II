export class Conjuntos {
    private _items: {};

    constructor() {
        this._items = {};
    }

    public has(element: any): boolean {
        return Object.prototype.hasOwnProperty.call(this._items, element);
    }

    public add(element: any): boolean {
        if (!this.has(element)) {
            this._items[element] = element;
            return true;
        }
        return false;
    }

    public delete(element: any): boolean {
        if (this.has(element)) {
            delete this._items[element];
            return true;
        }
        return false;
    }

    public clear(): void {
        this._items = {};
    }

    public size(): number {
        let count = 0;
        for (let key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    public values(): any[] {
        let values: any[] = [];
        for (let key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    public union(otherSet: Conjuntos): Conjuntos {
        const unionSet = new Conjuntos();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    public intersection(otherSet: Conjuntos): Conjuntos {
        const intersectionSet = new Conjuntos();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    public difference(otherSet: Conjuntos): Conjuntos {
        const differenceSet = new Conjuntos();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    public isSubsetOf(otherSet: Conjuntos): boolean {
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false;
            }
        }
        return true;
    }
}


const setA = new Conjuntos();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Conjuntos();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values()); 

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values()); 

const differenceAB = setA.difference(setB);
console.log(differenceAB.values());

console.log(setA.isSubsetOf(setB));
const setC = new Conjuntos();
setC.add(1);
setC.add(2);
console.log(setC.isSubsetOf(setA)); 
