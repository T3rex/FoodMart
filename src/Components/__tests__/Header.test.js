import Header from "../Header"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo must load on rendering header",()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store} >
        <Header/>
    </Provider>
    </StaticRouter>
    );

    const logo = header.getAllByTestId("logo")
    
    
})

test("Cart item initially must be zero",()=>{
    const header = render(
    <StaticRouter>
        <Provider store={store} >
            <Header/>
        </Provider>
    </StaticRouter>
    );
    const cartLength = header.getByTestId("cartlength")
    expect(cartLength.innerHTML).toBe("0");    
})