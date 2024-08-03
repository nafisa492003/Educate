import React from 'react'
import Flex from './Flex'
import { Select } from 'antd';
import Cart_content from './Cart_content';
const Proudcts_RightSide_p = () => {
  return (
    <Flex className={`flex-col gap-9 w-full lg:w-9/12`}>
    {/* header part */}
   <Flex className={`items-center justify-between w-full`}>
    <span className='font-bold font-Urbanist text-[14px] md:text-[20px] text-hash'>Showing 1-9 of 12 Results</span>
    <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
   </Flex>
    {/* header part */}
    {/* cart part */}
    <Flex className={`items-center gap-[36px] flex-col lg:flex-row`}>
        <Cart_content/>
        <Cart_content/>
        <Cart_content/>
    </Flex>
    <Flex className={`items-center gap-[36px] flex-col lg:flex-row`}>
        <Cart_content/>
        <Cart_content/>
        <Cart_content/>
    </Flex>
    <Flex className={`items-center gap-[36px] flex-col lg:flex-row`}>
        <Cart_content/>
        <Cart_content/>
        <Cart_content/>
    </Flex>


    {/* cart part */}
    </Flex>
  )
}

export default Proudcts_RightSide_p