 export const filterData=(searchInput,restaurants)=>{
        let data =  restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase()));          
        return data;
    }
