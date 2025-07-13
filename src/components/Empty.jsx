import { FaRegFaceMehBlank } from "react-icons/fa6";

const Empty = ({ value }) => {
    return (
        <div className="p-8 rounded w-full max-w-sm text-center">
            <FaRegFaceMehBlank className="text-6xl mx-auto my-4" />
            <h1 className="text-2xl font-bold"> <span className="text-red-400">NO</span> {value}</h1>
        </div>
    );
}
export default Empty;