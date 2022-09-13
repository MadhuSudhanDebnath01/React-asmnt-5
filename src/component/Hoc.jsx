import React from "react"; 
 
 const products =[
        {productName : 'Phone',price : 5000},
        {productName : 'Bicycle',price : 10000},
        {productName : 'Clock',price : 300},
        {productName : 'Purse',price : 100},
        {productName : 'Watch',price : 4000},
    ]

    const Hoc = (WrappedComponent) => {
        class searchFunctionality extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    search: ''
                }
    
            }
            updateSearch = (e) =>{
                this.setState({search:e.target.value})
            }
            filterProducts = () => {
                return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
              }
              render(){
                const updatedProducts = this.filterProducts();
              return (
                <div>
                    <input type="text" onChange={this.updateSearch}></input>
                    <WrappedComponent products={updatedProducts} {...this.props}/>
                </div>
              )
        }
    }
      return searchFunctionality;
    }
    
    export default Hoc;