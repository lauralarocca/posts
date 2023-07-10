import { render, screen } from "@testing-library/react"
import { SignInButton } from "."


jest.mock('next-auth/react', () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})

describe('SignInButton Component', () => {
    it('renders correctly', () => {
        render(<SignInButton />)

        expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
    })

   
})


