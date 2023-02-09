import {useState} from "react";

export default function FComponent(){
    //    hook la thu vien de dung dc
//    state va life cycle trong Function component
    let [list, setList] = useState([
        {
            name: 'Anh',
            age: 30
        },

        {
            name: 'Minh',
            age: 31
        }
    ])
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    return(
        <>
            <div>
                <h1>Them moi user</h1>
                <h1>{age}</h1>
                <input type="text"  value={name}
                       onChange={(e)=> {
                           setName(e.target.value)
                       }
                       }
                />
                <input type="text"  value={age}
                       onChange={(e)=> {
                           setAge(e.target.value)
                       }
                       }
                />

                <button onClick={()=>{
                    setList([...list, {name:name, age:age}])
                }
                }>Them</button>
            </div>
            {list.map((item, index)=>(
                <>
                    <h2>key={index}{item.name}, {item.age}</h2>
                    <a onClick={()=>{
                        let a = list;
                        a.splice(index, 1);
                        setList([...a])
                    }}>Xoa</a>

                    <a onClick={()=>{
                        let newName = prompt("Moi ban nhap ten moi",list[index].name)
                        let newAge = prompt("Moi ban nhap tuoi moi",list[index].age)
                        list[index].name = newName;
                        list[index].age = newAge;
                        setList([...list])
                    }}>Sua</a>
                </>
            ))}

        </>
    )
    let add=()=>{
        setList([...list, {name:name, age:age}])
    }

}
