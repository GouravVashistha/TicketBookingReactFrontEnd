import { render, screen } from "@testing-library/react"
// import Login from "../Componenets/Login/Login"

// test('should render login component', () => {
//     render(<Login />)
//     const loginElement = screen.getAllByTestId('login-1');
//     expect(loginElement).toBeInTheDocument();

// })
//=======================================================================
import React from "react";
// import { mount } from "enzyme";
import { shallow } from 'enzyme'
import "../enzymeConfig";
import Login from "../Componenets/Login/Login";

describe("Test login form", function () {
    let wrapper;

    it("The user name was created correctly.", function () {
        wrapper = shallow(<Login />);
        wrapper.find('input[type="text"]').simulate("change", {
            target: { id: "username", value: "jatin@gmail.com" }
        });
        expect(wrapper.state("username")).toEqual("jatin@gmail.com");
    });

    it("The password was created correctly", function () {
        wrapper = shallow(<Login />);
        wrapper.find('input[type="text"]').simulate("change", {
            target: { id: "password", value: "abc" }
        });
        expect(wrapper.state("password")).toEqual("abc");
    });

    it("login check with right data", () => {
        wrapper = shallow(<Login />);
        wrapper
            .find('input[type="text"]')
            .simulate("change", { target: { id: "username", value: "jatin@gmail.com" } });
        wrapper
            .find('input[type="password"]')
            .simulate("change", { target: { id: "password", value: "abc" } });
        wrapper.find("button").simulate("click");
        expect(wrapper.state("loggedIn")).toBe(true);
    });
});
