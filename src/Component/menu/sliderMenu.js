import React from 'react'
class SliderMenu extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
                   slide:props.slide,
                   block:props.block,
                   showMenu:true   
                }
        
    }
     componentDidMount()
     {
        //  if(this.state.slide==true)
        //  {
        //      setTimeout(()=>{
        //          this.setState({showMenu:true})
        //      },500)
        //  }
     }
    componentWillReceiveProps(props){
         this.setState({slide:props.slide});
    }

    render()
    {
        var cname="";
        if(this.state.slide==null)
            cname="slider s-close";
        else if(this.state.slide===true)
            cname="slider s-open";
        else
            cname="slider s-close";
    
        return(
            <div>
                {
                    this.state.slide?(<div className="block" onClick={this.props.closeMenu}></div>):null
                }
                <div className={cname}>
                  {
                      this.state.showMenu?(  
                    <div className="fc start f-color fs-22 " style={{position:"relative"}}>   
                        <div className="pt-14 pl-14">Dashboard</div>
                        <div className="pt-14 pl-14">Student</div>
                        <div className="pt-14 pl-14">Teacher</div>
                        <div className="pt-14 pl-14">Library</div>
                        <div className="pt-14 pl-14">Login/Signin</div>
                        <div className="pt-14 pl-14">logout</div>
                    </div>
                      ):(
                          null
                      )
                  }
                </div>
            </div>
        )
    }
}

export default SliderMenu;