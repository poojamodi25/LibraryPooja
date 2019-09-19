import React from 'react'
import './menu.css'
import SliderMenu from './sliderMenu'
import { Link } from 'react-router-dom'
class Menu extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
          open:null,
          slide:false
        }
    }
    openMenu=(e)=>{
        this.setState({open:true,slide:true});
    }
    closeMenu=(e)=>{
        this.setState({open:false});
    }
    render()
    {
        return(
            <div>
                <div class="menu bg-color fr center fs-30 fw-600">
              <div class="fc center f-color">
                    Library Management
            </div>
          </div>
          <div class="nav fr sb">
              <div class="fr sa" >
                  <div class="fc center pl-20 pr-15 ml-10 fs-20 hov" style={{"position": "relative"}}>
                      Home
                    </div>
                  <div class="fc center pl-20 pr-15 fs-20 hov f1-color">Student</div>
                  <div class="fc center pl-20 pr-15 fs-20 hov f1-color">Teacher</div>

              </div>
              <div class="fr right ">
                  <div class="fc center  mr-30">
                  <input className="in-search  " type="text" placeholder="Search from google"/>
                </div>
                <div class="fc center mr-30 fs-18">
                  <div class ="fr center">
                  <Link className="mr-10" to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                  </div>
                </div>
              </div>
          </div>
          <div className="nav1 fr sb">
              <div class="fc center ml-5"  onClick={(e)=>{this.openMenu(e)}}>
                <img src="./images/list-menu.png" alt="list"/></div>
                <div class="fc center mr-5" >
                <input className="in-search  " type="text" placeholder="Search from google"/>
                </div>
          </div>

             <SliderMenu slide={this.state.open} block={false} closeMenu={this.closeMenu}/>
            </div>
        )
    }
}
export default Menu;
