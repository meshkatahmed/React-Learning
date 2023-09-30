import { useParams,useHistory } from "react-router-dom";

export default function Posts() {
    console.log(useHistory());
    const {category,topic} = useParams();
    return (
        <div>this is posts page - {category}/{topic}</div>
    );
}