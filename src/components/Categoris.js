import React, { Component } from 'react'

export class Categoris extends Component {
    constructor(props){
        super(props)
        this.state={
            catigories:[
                {
                    key:'all',
                    name:'Всё'
                },
                 {
                    key:'chairs',
                    name:'Стулья'
                },
                 {
                    key:'tables',
                    name:'Столы'
                },
                 {
                    key:'closet',
                    name:'Шкафы'
                },
                 {
                    key:'lamp',
                    name:'Лампы'
                },
                 {
                    key:'bad',
                    name:'Кровати'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>{this.state.catigories.map(el=>(
        <div key={el.key} onClick={()=>this.props.chooseCategori(el.key)}>{el.name}</div>
      ))}</div>
    )
  }
}

export default Categoris