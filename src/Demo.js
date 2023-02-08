import {Component} from "react";
export default class Demo extends Component{

    constructor() {
        super();
        this.state={
            list:[
                {
                    name: 'Anh',
                    age: 30
                },

                {
                    name: 'Minh',
                    age: 31
                }
            ],
            inputName: 'Name',
            inputAge: ''
        }
    }

    add=()=>{
        this.setState(
            {
                list: [...this.state.list, {name: this.state.inputName, age: this.state.inputAge}],
                inputName: '',
                inputAge: ''
            }
        )
    }

    getInfo=(e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
       return(
           <>
               <div>
                    <h1>Them moi user</h1>
                   <input type="text" name={"inputName"} value={this.state.inputName}
                          onChange={(this.getInfo)
                          }
                   />
                   <input type="text"  name={"inputAge"} value={this.state.inputAge}
                          onChange={this.getInfo}
                   />
                   <button onClick={()=>{
                       this.add()
                   }
                   }>Them</button>
               </div>
               {this.state.list.map((item, index)=>(
                   <>
                       <h2>key={index}{item.name}, {item.age}</h2>
                       <a onClick={()=>{
                           this.state.list.splice({index}, 1)
                           this.setState((s)=>{
                               return {
                                   list: this.state.list
                               }
                           })
                       }}>Xoa</a>

                       <a onClick={()=>{
                           let newName = prompt("Moi ban nhap ten moi",this.state.list[index].name)
                           let newAge = prompt("Moi ban nhap tuoi moi",this.state.list[index].age)
                           this.state.list[index].name = newName;
                           this.state.list[index].age = newAge;
                           this.setState(()=>{
                               return{
                                   list: this.state.list
                               }
                           })
                       }}>Sua</a>
                   </>
               ))}

           </>
    )
    }
}
