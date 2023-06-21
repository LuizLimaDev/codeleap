import useCreatePost from 'src/Hooks/useCreatePost';

export default function Post() {
    const {
        username,
        title,
        setTitle,
        content,
        setContent,
        validPost,
        handleCreatePost
    } = useCreatePost();

    return (
        <div className='container p-6 flex flex-col'>
            <h3 className='font-bold text-xl mb-6'>{`What's on your mind ${username}?`}</h3>

            <label htmlFor="title ">Title</label>
            <input
                className='input'
                placeholder='Hello world'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="content">Content</label>
            <input
                className='input'
                placeholder='Content here'
                value={content}
                onChange={event => setContent(event.target.value)}
            />

            <button
                className={`button ${title && content ? 'bg-blue' : 'bg-gray-50'}`}
                disabled={validPost}
                onClick={handleCreatePost}
            >
                Create
            </button>
        </div>
    )
}