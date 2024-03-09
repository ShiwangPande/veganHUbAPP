import React from 'react'
import { useState } from 'react'
import Tabitem from './Tabitem'

function Tabs({ list, activeTab, onTabSwitch }) {
    let active = activeTab == '' ? list[0] : activeTab
    return (
        <div className='sticky z-1900 bg-white'>
            <div className='container mx-auto flex align-center py-2 border-b-gray-400 border-b-1'>
                {list.map((item, index) => {
                    return (
                        <Tabitem
                            title={item}
                            index={index}
                            key={index}
                            active={active === item}
                            setActive={onTabSwitch}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs