import { render, screen } from "@testing-library/react"
import Login from "./Componenets/Login/Login"

test('should render login component', () => {
    render(<Login />)
    const loginElement = screen.getAllByTestId('login-1');
    expect(loginElement).toBeInTheDocument();

})
