import React,{Component} from 'react'

class Pagination extends Component{
    state={
        querySet:[{
            rank:1,
            name:"Aaroh"
        },
        {
            rank:2,
            name:"X"
        },
        {
            rank:3,
            name:"Y"
        },
        {
            rank:4,
            name:"Z"
        },
        {
            rank:5,
            name:"A"
        },
        {
            rank:6,
            name:"B"
        },
        {   rank:7,
            name:"C"

        },
        {
            rank:8,
            name:"D"
        },
        {
            rank:9,
            name:"D"
        },
        {
            rank:10,
            name:"E"
        },
        {
            rank:11,
            name:"F"
        },
        {
            rank:12,
            name:"G"
        },
        {
            rank:13,
            name:"Aaroh"
        },
        {
            rank:14,
            name:"X"
        },
        {
            rank:15,
            name:"Y"
        },
        {
            rank:16,
            name:"Z"
        },
        {
            rank:17,
            name:"A"
        },
        {
            rank:18,
            name:"B"
        },
        {   rank:19,
            name:"C"

        },
        {
            rank:20,
            name:"D"
        },
        {
            rank:21,
            name:"D"
        },
        {
            rank:22,
            name:"E"
        },
        {
            rank:23,
            name:"F"
        },
        {
            rank:24,
            name:"G"
        },
        {
        rank:23,
        name:"F"
    },
    {
        rank:24,
        name:"G"
    }],
        page:1,//current page
        rows:5,
        pages:0//dynamic update max no. of pages
    }
    componentDidMount(){
        let pages=Math.ceil((this.state.querySet.length)/(this.state.rows));
        this.setState({
                pages:pages
              });
        }

    handleNext=(e) => {
         let current=this.state.page;
         let max=this.state.pages;
         if(current<max)
            {   this.setState({
                    page:current+1
                })
            }
    };
    handlePrev=(e)=>{
        let current=this.state.page;
        if(current>1)
           {   this.setState({
                   page:current-1
               })
           }
   }
   handleChanges=(e)=>{
       this.setState({
        page: parseInt(e.target.id)
       })
   }
    render(){
        let data=[];
        let button=[];
        let start=(this.state.page-1)*this.state.rows;
         let  end=(()=>{
             let temp=this.state.rows+start-1;
             if(temp>=this.state.querySet.length)
             {
                 return this.state.querySet.length-1;
             }

             else{
                 return temp;
             }
         })();

         for(let i=start;i<=end;i++)
         {
             data.push(<div key={i}>{this.state.querySet[i].name}</div>);
         }
         for(let i=1;i<=this.state.pages;i++){
         button.push(<button id={i} key={i} onClick={this.handleChanges}>{i}</button>)
        }
        
        return(
                <>
                {data}

        <p>page number:{this.state.page} </p>
        <button onClick={this.handlePrev}>Prev</button>
        {   
            button
        }
        
        <button onClick={this.handleNext}>Next</button>
        <nav>Wadu HEkk
        </nav>
        {this.props.children}
       
                </>

        )
    }
}

export default Pagination;