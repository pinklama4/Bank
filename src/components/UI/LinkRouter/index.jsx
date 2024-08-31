import {Link} from "react-router-dom";

export function LinkRouter({children, to, className}) {
    return(
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}