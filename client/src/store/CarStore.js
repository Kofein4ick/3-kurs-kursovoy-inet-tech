
import { makeAutoObservable } from "mobx"

export default class CarStore {
    constructor(){
        this._type=[]
        this._brand=[]
        this._car=[]
        this._selectedType={}
        this._selectedBrand={}
        makeAutoObservable(this)
    }

    setselectedType(type)
    {
        this._selectedType=type
    }
    setselectedBrand(brand)
    {
        this._selectedBrand=brand
    }
    setType(types){
        this._type=types
    }
    setBrand(brands){
        this._brand=brands
    }
    setCar(cars){
        this._car=cars
    }

    getType(){
       return this._type
    }
    getBrand(){
        return this._brand
    }
    getCar(){
        return this._car
    }
    getselectedType()
    {
        return this._selectedType
    }
    getselectedBrand()
    {
        return this._selectedBrand
    }
}