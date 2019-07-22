import store from '@/store/productStore.js'
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const products = [
    {
        name: 'name',
        description: 'description',
        listPrice: 'listPrice',
        offerPrice: 'offerPrice',
        stock: 'stock'
    }
]

const products2 = [
    {
        name: 'name',
        description: 'description',
        listPrice: 'listPrice',
        offerPrice: 'offerPrice',
        stock: 'stock'
    }
]

describe('Product Store', () => {
    it('getters: PRODUCTS return the correct value', () => {
        const result = store.getters.PRODUCTS({
            products
        })

        const expectedResult = [
            {
                name: 'name',
                description: 'description',
                listPrice: 'listPrice',
                offerPrice: 'offerPrice',
                stock: 'stock'
            }
        ]

        expect(result).toEqual(expectedResult)
    })

    it('mutations: SET_PRODUCT will change the value of state PRODUCTS', () => {
        const dummyData = {
            products
        }

        store.mutations.SET_PRODUCT(dummyData, products)
        expect(dummyData.products).toEqual(products)
    })

    // it('mutations: ADD_PRODUCT will add the value to state PRODUCTS', () => {
    //     const dummyData = {
    //         products
    //     }

    //     const newData = 

    //     store.mutations.ADD_PRODUCT(dummyData, products)
    //     expect(dummyData.products.push(products2)).toEqual(products.push(products2))
    // })

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
    //     const $storeInstance = new Vuex.Store(store)

    //     Axios.get = jest.fn().mockResolvedValueOnce(mockGetProducts)

    //     store.actions.getProducts({ commit })
        
    //     // expect(commit).toHaveBeenCalledWith('SET_PRODUCT', products)

    //     // Axios.get = jest.fn().mockResolvedValueOnce(mockGetProducts)

    //     // $storeInstance.dispatch('getProducts')
    
    //     expect($storeInstance.state.products).toEqual(products)
    // })
})