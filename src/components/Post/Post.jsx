import { useState } from "react";
import { useSelector } from "react-redux";
import deleteIcon from 'assets/delete.png';
import editIcon from 'assets/edit.png';

export default function Post() {
    //state q deve ser controlado em outro nivel
    const [isUser, setIsUser] = useState(false)
    const posts = useSelector(state => state.posts);

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="container" key={post.id}>
                        <div className="flex justify-between title-bar p-6">
                            <h3>{post.title}</h3>

                            {isUser && (
                                <div className="flex justify-end items-center">
                                    <img src={deleteIcon} alt="delete" />
                                    <img src={editIcon} alt="edit" style={{ marginLeft: "1.5rem" }} />
                                </div>
                            )}

                        </div>

                        <div className="m-6">
                            <div className="flex justify-between items-center text-xl my-4">
                                <strong className="text-gray-100">{`@${post.userName}`}</strong>
                                <p className="text-gray-100">25 minutes ago</p>
                            </div>

                            <p className='indent-4'>{post.body}</p>

                        </div>
                    </div>
                )
            })}
        </>
    )
}