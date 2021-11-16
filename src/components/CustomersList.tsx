import React, { Component } from 'react'
class CustomersList extends Component {
  state = {
    pageTitle: 'Customers',
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: 'Scott',
        phone: '18727867862',
        address: { city: '上海' },
        photo: 'https://picsum.photos/id/124/65',
      },
      {
        id: 2,
        name: 'Loyal',
        phone: '18727867834',
        address: { city: '北京' },
        photo: 'https://picsum.photos/id/1068/65',
      },
      {
        id: 3,
        name: 'Jones',
        phone: null,
        address: { city: '杭州' },
        photo: 'https://picsum.photos/id/102/65',
      },
      {
        id: 4,
        name: '小天鹅',
        phone: '18724567862',
        address: { city: '江苏' },
        photo: 'https://picsum.photos/id/1027/65',
      },
      {
        id: 5,
        name: '秋逢',
        phone: null,
        address: { city: '福建' },
        photo: 'https://picsum.photos/id/103/65',
      },
      {
        id: 6,
        name: 'Hello',
        phone: '18727892862',
        address: { city: '深圳' },
        photo: 'https://picsum.photos/id/104/65',
      },
    ],
  }

  //按条件渲染昵称
  customerNameStyle = (custName: string) => {
    if (custName.match(/\w+/)) {
      return 'green-hight border-left'
    } else {
      return 'red-hight border-left '
    }
  }
  render() {
    return (
      <>
        <h4 className="boder-bottom m-1 b-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary">{this.state.customerCount}</span>
          <button onClick={this.onRefreshClick} className="btn btn-info m-1">
            Refresh
          </button>
        </h4>
        <table className="table m-1 table-hover ">
          <thead>
            <tr>
              <th>序号</th>
              <th>头像</th>
              <th>昵称</th>
              <th>电话号码</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </>
    )
  }

  //当点击按钮的时候更新顾客数量
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    })
  }

  //遍历表格数据
  getCustomerRow = () => {
    return this.state.customers.map((value, index) => {
      return (
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>
            <img src={value.photo} alt="customer‘s photo" />
            <div>
              <button
                className="btn btn-sm btn-secondary "
                style={{ marginTop: '3px' }}
                onClick={() => {
                  this.onChangePictureClick(index)
                }}
              >
                更换头像
              </button>
            </div>
          </td>
          <td className={this.customerNameStyle(value.name)}>{value.name}</td>
          <td>{this.setPhoneToRender(value.phone)}</td>
          <td>{value.address.city}</td>
        </tr>
      )
    })
  }

  //按条件更新电话号码
  setPhoneToRender = (phone: string | null) => {
    return phone ? phone : <div className="bg-warning p-1">电话号码未注册</div>
  }

  //当用户点击时更换头像
  onChangePictureClick = (index: number) => {
    let custArr = this.state.customers
    let photoId = parseInt((Math.random() * 100).toString())
    custArr[index].photo = `https://picsum.photos/id/${photoId}/65`
    this.setState({
      customers: custArr,
    })
  }
}

export default CustomersList
