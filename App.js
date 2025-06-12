import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categoris from "./components/Categoris";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){ 
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items:[
        {
          id:1,
          title:'Стул серый',
          img:'chair.webp',
          desc:'lorem ipsum dolor sit meat',
          categori:'chairs',
          price:'49.99'
        },
        {
          id:2,
          title:'Стол',
          img:'table.webp',
          desc:'lorem ipsum dolor sit meat',
          categori:'table',
          price:'149.99'
        },
        {
          id:3,
          title:'Диван',
          img:'bad.webp',
          desc:'lorem ipsum dolor sit meat',
          categori:'bad',
          price:'249.99'
        },
        {
          id:4,
          title:'Шкаф',
          img:'closet.webp',
          desc:'lorem ipsum dolor sit meat',
          categori:'closet',
          price:'49.99'
        },
        {
          id:5,
          title:'Настольная лампа',
          img:'lamp.jpeg',
          desc:'lorem ipsum dolor sit meat',
          categori:'lamp',
          price:'34.76'
        }
      ],
      showFullItem:false,
      fullItem:{}
    }
    this.state.currentItems =this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategori = this.chooseCategori.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categoris chooseCategori={this.chooseCategori}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem&& <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

chooseCategori(categori){
if(categori ==='all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState ({
  currentItems:this.state.items.filter(el=>el.categori === categori)
})
}

deleteOrder(id){
this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
}

  addToOrder(item){
    let isInArray = false
this.state.orders.forEach(el=>{
  if(el.id === item.id)
   isInArray = true
})
if(!isInArray)
this.setState({orders:[...this.state.orders,item] })
  }
}

export default App;
