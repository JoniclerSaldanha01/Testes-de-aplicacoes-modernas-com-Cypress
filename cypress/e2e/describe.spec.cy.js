/// <reference types="cypress"/>

it('A external test...', () =>{

})

describe('Should group teste...', () =>{
  describe('Should group more specific tests...', () =>{
    it('A special test...', () =>{

    })
  })

  describe('Should group more specific tests 2...', () =>{
    it('A special test 2...', () =>{

    })
  }) 

  it('A internal test...', () =>{

  })
})