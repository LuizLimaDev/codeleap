export default function ModalDelete() {
    return (
        <div className='modal-shade'>
            <div className="container-modal">
                <h3 className="font-bold text-xl">Are you sure you want to delete this item?</h3>
                <div className="flex justify-end mt-10">
                    <button className="button text-black border border-gray-100">Cancel</button>
                    <button className="button bg-red">Delete</button>
                </div>
            </div >
        </div>
    )
}