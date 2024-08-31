import {Link, useMatch} from "react-router-dom";


export function NavbarLink (children, to) {
    const match = useMatch(to)
    return(
        <Link
            to={to}
            style={{color: match ? "red" : "white",
        }}
        >
            {children}
        </Link>
    )
}