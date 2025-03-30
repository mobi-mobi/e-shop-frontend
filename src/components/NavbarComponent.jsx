import "./NavbarComponent.css"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {Link} from "react-router-dom"
import {useUser} from "@clerk/clerk-react"

const NavbarComponent = () =>{

    const { isSignedIn, user } = useUser()

    const checkRole = (role) => {
        if(isSignedIn){
          return user?.publicMetadata?.role === role
        }
      }

    return(
        <div className="navbar-cont">
            <h1>CuteKeyChains</h1>
            <ul>
                <Link id="nav-link" to="/products">SHOP</Link>
                <li>CONTACT</li>
                <Link id="nav-link" to="/cart">CART</Link>
                <SignedOut>
                    <SignInButton id="sign-button"/>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                {
                checkRole('admin')?
                    (
                    <SignedIn>
                        <Link id="nav-link" to="/admin">ADMIN</Link>
                    </SignedIn>
                    )
                    :
                    (
                        <div></div>
                    )

                }
            </ul>
        </div>
    )
}

export default NavbarComponent