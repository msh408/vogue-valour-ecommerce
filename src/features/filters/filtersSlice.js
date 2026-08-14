import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedMaterials:[],
    selectedColors:[],
    selectedSizes:[],
    selectedBrands:[],

    Category:"all-collection",

    sortBy:'newest'
}

const filtersSlice = createSlice({
    name:'filters',
    initialState,

    reducers:({
       toggleMaterials: (state, action) => {
        const material = action.payload;

        if (state.selectedMaterials.includes(material)) {
            state.selectedMaterials = [];
        } else {
            state.selectedMaterials = [material];
        }
        },

        toggleSize: (state, action) => {
        const size = action.payload;

        if (state.selectedSizes.includes(size)) {
            state.selectedSizes = [];
        } else {
            state.selectedSizes = [size];
        }
        },
       toggleColors: (state, action) => {
        const color = action.payload;

        if (state.selectedColors.includes(color)) {
            state.selectedColors = [];
        } else {
            state.selectedColors = [color];
        }
        },
        toggleBrands: (state, action) => {
        const brand = action.payload;

        if (state.selectedBrands.includes(brand)) {
            state.selectedBrands = [];
        } else {
         state.selectedBrands = [brand];
        }},
         setSortBy: (state,action) =>{
        state.sortBy = action.payload
        },
        setToggleCategory :(state,action) =>{
            state.Category =action.payload;
        },
        clearFilters: (state) => {
            state.selectedMaterials = [];
            state.selectedSizes = [];
            state.selectedColors = [];
            state.selectedBrands = [];
            state.sortBy = "newest";
        },
  
       
    })
}) 

export const {toggleBrands,toggleColors,toggleMaterials,toggleSize,setSortBy, clearFilters , setToggleCategory} =filtersSlice.actions;
export default filtersSlice.reducer