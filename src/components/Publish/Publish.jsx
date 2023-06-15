import { useState } from 'react';

export default function Post() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [validPost, setValidPost] = useState(false);

    function isValidPost() {
        if (title && content) {
            setValidPost(true)
            console.log('Posted')
        }
    }

    return (
        <div className='container p-6 flex flex-col'>
            <h3 className='font-bold text-xl mb-6'>What&apos;s on your mind?</h3>

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
                onClick={isValidPost}
            >
                Create
            </button>
        </div>
    )
}