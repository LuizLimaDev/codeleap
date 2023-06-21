import { useSelector } from "react-redux";
import deleteIcon from 'assets/delete.png';
import editIcon from 'assets/edit.png';
import { useParams } from "react-router-dom";
import useFetch from "src/Hooks/useFetch";

export default function Post() {
    const { username } = useParams()
    const posts = useSelector(store => store.posts);

    return (
        <div className="pb-6">
            {posts.map((post, index) => (
                <div className="container" key={index}>
                    <div className="flex justify-between title-bar p-6">
                        <h3 className="truncate w-3/4">{post.title}</h3>

                        {post.username === username && (
                            <div className="flex justify-end items-center">
                                <img src={deleteIcon} alt="delete" />
                                <img className="ml-6" src={editIcon} alt="edit" />
                            </div>
                        )}
                    </div>

                    <div className="m-6">
                        <div className="flex justify-between items-center text-xl my-4">
                            <strong className="text-gray-100">{`@${post.username}`}</strong>
                            <p className="text-gray-100">25 minutes ago</p>
                        </div>

                        <p className='indent-4'>{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}