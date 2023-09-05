import React from 'react'

function CategoryForm({ handleSubmit, value, setValue }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='m-1 w-75'>
                    <input type='text' className='form-control ' placeholder='enter new category' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <button className='btn btn-outline-success my-1'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CategoryForm