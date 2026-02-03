import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Welcome Admin</h2>

            <Link to="/">
                <button className="px-4 py-1 bg-red-500 text-white rounded">Logout</button>
            </Link>
        </div>
    );
}
