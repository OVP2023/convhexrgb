import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '#FFFFFF'};
    this.strRGB='';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    let r,g,b = 0   
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value);
    if (event.target.value.length==7){
      if (result){ 
        r=parseInt(result[1], 16)
        g=parseInt(result[2], 16)
        b=parseInt(result[3], 16)
        this.strRGB='rgb('+String(r)+','+String(g)+','+String(b)+')'
      } else {  
        result=null;
        this.strRGB='ошибка'
      }
    }
     
  }
 
  render() {
    const container = {
         padding: 152,
         background: ` ${this.state.value}` ,
       }
    
    return (
      <div>     
        <form >
          <h2> {this.strRGB}</h2>
          <label>
            Введите цвет в формате HEX:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <div className="color" style={container}> 
        </div>
      </div>
    );
  }
}

export default NameForm
