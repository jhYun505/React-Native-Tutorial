import { Link } from "react-router-dom";

export default function TopMenu() {
    return (
        <ul>
            <li>
                <Link to="/">정치</Link>

            </li>
            <li>
                <Link to="/">사회</Link>
                
            </li>
            <li>
                <Link to="/">경제</Link>
                
            </li>
            <li>
                <Link to="/">IT</Link> 
            </li>
            <li>
                <Link to="/">금융</Link>
            </li>
            <li>
                <Link to="/">문화</Link>
            </li>

            <li>
                <Link to="/">여행</Link>
            </li>
        </ul>
    );
}