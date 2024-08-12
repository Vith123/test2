import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { request } from '../../share/request';

function User() {

const [list,setList]=useState()

  useEffect(()=>{
      getList();
  },[])

const getList=()=>{
    const res = request("users","get",{})
    if(res){
      setList(res.list)
    }

}

  return (
    <div>
      <div>
        <Table
        
        dataSource={list}
        columns={[
          {
            key:"No",
            title:"No",
            dataIndex:"No",
            render: (value,rows,index) => (index+1)
          },
          {
            key:"name",
            title:"name",
            dataIndex:"name",
          },
          {
            key:"email",
            title:"email",
            dataIndex:"email",
          },
          {
            key:"password",
            title:"password",
            dataIndex:"password",
          },
          {
            key:"address",
            title:"address",
            dataIndex:"address",
          },
          {
            key:"phone",
            title:"phone",
            dataIndex:"phone",
          },
        ]}

        />
      </div>
    </div>
  )
}

export default User
