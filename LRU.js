class LRU {
    constructor(max=10) {
        this.max = max;
        this.cache = new Map();
    }
    get(key) {
        let item = this.cache.get(key);
        if (item) // refresh key
        {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }
    set(key, val) {
        if (this.cache.has(key)) // refresh key
            this.cache.delete(key);
        else if (this.cache.size == this.max) // evict oldest
            this.cache.delete(this._first());
        this.cache.set(key, val);
    }
    _first(){
			console.log("_first",this.cache.keys().next().value);
			console.log(this.cache.keys());
        return this.cache.keys().next().value;
    }
}
let cache = new LRU(3);
[1, 2, 3, 4, 5].forEach(v => cache.set(v, 'v:'+v))
console.log(cache);
console.log(cache.get(3))
cache.set(6, 6)
console.log(cache.get(3))
