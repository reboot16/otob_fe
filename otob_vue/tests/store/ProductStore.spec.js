import productStore from '@/store/productStore.js'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

const products = [
  {
    name: 'name',
    description: 'description',
    listPrice: '10000',
    offerPrice: '9000',
    stock: '5'
  }
]
const arrProduct = {
  name: 'name2',
  description: 'description2',
  listPrice: '15000',
  offerPrice: '10000',
  stock: '3'
}

const dummyState = {
  products
}

describe('Product store', () => {
  
  beforeEach(() => {
    const state = {
      products: [],
      totalPages: 0
    }
    const mutations = productStore.mutations;
    const getters = productStore.getters;
    const actions = productStore.actions;
  })
  
  const store = new Vuex.Store({ state, mutations, actions, getters})
  
  it('getters: PRODUCTS return the correct value', () => {
    const result = store.getters.PRODUCTS({
      products
    })
    const expectedResult = [
      {
        name: 'name',
        description: 'description',
        listPrice: '10000',
        offerPrice: '9000',
        stock: '5'
      }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('mutations: SET_PRODUCT will change the value of state PRODUCTS', () => {
    store.mutations.UPDATE_PRODUCT(dummyState, arrProduct)
    // expect(store.state.PRODUCTS[]).toEqual(1)
  })
   
  it('mutations: ADD_PRODUCT will add the value to state PRODUCTS', () => {
    const expectedObj = [
      {
        name: 'name',
        description: 'description',
        listPrice: '10000',
        offerPrice: '9000',
        stock: '5'
      },
      {
        name: 'name2',
        description: 'description2',
        listPrice: '15000',
        offerPrice: '10000',
        stock: '3'
      }
    ]
    
    store.mutations.ADD_PRODUCT(dummyState, arrProduct)
    expect(dummyState.products).toEqual(expectedObj)
  })

    // it('mutations: DELETE_PRODUCT will delete value with the same id on state PRODUCTS', () => {
    //     const dummyPost = {
    //         products
    //     }

    //     store.mutations.DELETE_PRODUCT(dummyPost, products)
    //     expect(dummyPost.products).toEqual(products)
    // })

    // it('actions: getProducts will get the value of state PRODUCTS', () => {
    //     const commit = jest.fn()
    //     const mockGetProducts = Promise.resolve({
    //         data: products
    //     })
    //     const $storeInstance = new Vuex.store(store)

    //     Axios.get = jest.fn().mockResolvedValueOnce(mockGetProducts)

    //     store.actions.getProducts({ commit })
        
    //     // expect(commit).toHaveBeenCalledWith('SET_PRODUCT', products)

    //     // Axios.get = jest.fn().mockResolvedValueOnce(mockGetProducts)

    //     // $storeInstance.dispatch('getProducts')
    
    //     expect($storeInstance.state.products).toEqual(products)
    // })
})