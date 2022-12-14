import React from 'react'

const UserInfoCard = ({ data, value }) => {
    return (
        <>
            <span className='min-w-[100px] inline-block mr-[10px] font-bold text-[15px]'>{data}</span>
            <span className='text-secondaryTextGray'>{value}</span>
        </>
    )
}

export default UserInfoCard