import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
            <h1 className="text-xl font-bold mb-8">Admin Panel</h1>
            <nav className="flex flex-col space-y-4">
                <Link to="/home" className="hover:text-blue-400">Home</Link>

                <div>
                    <h2 className="font-semibold mt-4 mb-1">Movies</h2>
                    <Link to="/movie/add" className="ml-2 block hover:text-blue-400">Add Movie</Link>
                    <Link to="/movie/view" className="ml-2 block hover:text-blue-400">View Movie</Link>
                </div>

            </nav>
        </div>
    );
}