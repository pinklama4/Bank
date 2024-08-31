import {Link} from "react-router-dom";


export function NavbarLink ({children, to, className}) {
    return(
        <Link
                to={to}
                className={className}
        >
            {children}
        </Link>
    )
}