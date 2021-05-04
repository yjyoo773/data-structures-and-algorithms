'use strict'

const AnimalShelter = require('../fifo-animal-shelter')
const Animal = require('../animal')

describe('ANIMAL SHELTER',()=>{
    const shelter = new AnimalShelter()
    const cat1  = new Animal('whisk','cat')
    it('can add a dog to the shelter',()=>{
        let dog = new Animal('ruff','dog')
        shelter.enqueue(dog)
        expect(shelter.dog.length).toEqual(1)
        expect(shelter.dog[0]).toEqual(dog)
    })

    it('can add multiple cats to the shelter',()=>{
        let cat2 = new Animal('mew','cat')
        shelter.enqueue(cat1)
        shelter.enqueue(cat2)
        expect(shelter.cat.length).toEqual(2)
        expect(shelter.cat[shelter.cat.next]).toEqual(cat1)
    })

    it('gives an error when entering an animal that is not a cat/dog',()=>{
        let pig = new Animal('oink','pig')
        expect(shelter.enqueue(pig)).toEqual("We only take cats and dogs")
    })

    it('not adding a preference on dequeue should return null',()=>{
        console.log('dequee',shelter.cat)
        expect(shelter.dequeue()).toEqual(null)
    })

    it('should return the animal that was first added for each animal',()=>{
        expect(shelter.dequeue('cat')).toEqual(cat1)
    })

    it('should return false for dequeueing an empty queue',()=>{
        shelter.dequeue('dog')
        expect(shelter.dequeue('dog')).toBeFalsy()
    })
})