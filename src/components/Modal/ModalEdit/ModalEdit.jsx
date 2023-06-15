

export default function ModalEdit() {
    return (
        <div className="modal-shade">
            <div className="container-modal">
                <h3 className="font-bold text-xl mb-6">Edit item</h3>

                <label htmlFor='title'>Title</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Hello world"
                />

                <label htmlFor='title'>Content</label>
                <textarea
                    className="input h-20"
                    type="text"
                    placeholder="Content here"
                />

                <div className="flex justify-end">
                    <button className="button text-black border border-gray-100">Cancel</button>
                    <button className="button bg-green">Save</button>
                </div>
            </div>
        </div>
    );
}

