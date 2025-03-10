import { Link, useNavigate } from "react-router-dom"


function LinkButton({children, to}) {
    const navigate = useNavigate();
    const className = 'linkBtn';

    if(to === '-1') {
        return (
            <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>
        );
    }
    return (
        <Link to={to} className={className}>{children}</Link>
    );
}
export default LinkButton;
