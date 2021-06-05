const {LL,HashMap} = require('./hashmap.js')

describe('HASHMAP TEST',()=>{
    it('should add a key/value to your hashtable and results in the value should be in the data structure',()=>{
        let hashmap = new HashMap(300)
        hashmap.set('randomkey',15)
        expect(hashmap.contains('randomkey')).toBe(true)
    })

    it('should retrieve based on a key and return the value stored',()=>{
        let hashmap = new HashMap(300)
        hashmap.set('randomkey',15)
        expect(hashmap.get('randomkey').val).toEqual(['randomkey',15])
    })

    it('should successfully returns null for a key that does not exist in the hashtable',()=>{
        let hashmap = new HashMap(300)
        hashmap.set('randomkey',15)
        expect(hashmap.contains('keyNotInHashMap')).toBe(false)
    })

    it('should successfully handle a collision within the hashtable',()=>{
        let hashmap = new HashMap(300)
        hashmap.set('randomkey',15)
        hashmap.set('randomkey',51)
        let ll = new LL()
        ll.add(['randomkey',15])
        ll.add(['randomkey',51])
        expect(hashmap.get('randomkey')).toEqual(ll.head)
    })
})