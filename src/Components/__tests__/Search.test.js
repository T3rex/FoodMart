import Body from "../Body"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux"
import { render } from "@testing-library/react";
import {RESTAURANT_DATA} from "../mocks/data"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{Promise.resolve(RESTAURANT_DATA)}
    })
});

test("Shimmer should load on Homepage",()=>{

    const body = render(
                            <StaticRouter>
                                <Provider store={store}>
                                    <Body/>
                                </Provider>
                            </StaticRouter>
                        );
    
    
    const shimmer = body.getByTestId("shimmer");
    
    expect(shimmer).toBeInTheDocument();

})


// test("Search Results on Homepage",()=>{

//     const body = render(
//                             <StaticRouter>
//                                 <Provider store={store}>
//                                     <Body/>
//                                 </Provider>
//                             </StaticRouter>
//                         );
    
    
//     const search = body.getByTestId("search-btn");
//     console.log(search);


// })