const GenderCheckBox=()=>{
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-text font-bold text-gray-200'>Male</span>
                    <input type="checkbox" className='checkbox checkbox-success border-slate-900'/>
                </label>
            </div>

            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-text font-bold text-gray-200'>Female</span>
                    <input type="checkbox" className='checkbox checkbox-success border-slate-900'/>
                </label>
            </div>

        </div>
    )
};

export default GenderCheckBox;