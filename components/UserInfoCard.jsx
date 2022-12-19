import React from 'react'

const UserInfoCard = ({ data, value }) => {
    return (
        <>
            <span className='min-w-[100px] inline-block mr-[10px] font-bold text-[15px] dark:text-white'>{data}</span>
            <span className='text-secondaryTextGray dark:text-darkTertiary'>{value}</span>
        </>
    )
}

export default UserInfoCard