import React from 'react'

const SelectTagSimple = ({visibleData,handleChange,handleSelectClick,data}) => (
    <div>
        <select value={visibleData} onChange={handleChange} onClick={() => handleSelectClick()}>
            {data && data.map((item, index) => <option value={item.value}>{item.displayName}</option>)}
        </select>
    </div>
)

export default SelectTagSimple