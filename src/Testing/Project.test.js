import { render, screen, fireEvent } from '@testing-library/react';
import Project from './project';



test("welcome team component", () => {
    render(<Project />)
    fireEvent.click(screen.getByText("View Movie Id"))
    screen.findAllByAltText(1).then((e) => {
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View Movie Name"))
    screen.findAllByAltText("KGF").then((e) => {
        console.log(e)
        expect(e).toBeInTheDocument()
    })

})

