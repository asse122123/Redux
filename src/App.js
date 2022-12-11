import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fname, lname, Age, Gender, profession } from './store/action/action';
import './App.css';

function App() {
  const firstName = useSelector((state)=>state.firstName)
  const lastName = useSelector((state)=>state.lastName)
  const age = useSelector((state)=>state.Age)
  const gender = useSelector((state)=>state.Gender)
  const Profession = useSelector((state)=>state.Profession)

  const dispatch = useDispatch()  

  const [myfn, setMyfn] = useState("")
  const [myln, setMyln] = useState("")
  const [myage, setMyage] = useState()
  const [mygender, setMygender] = useState("")
  const [mypro, setMypro] = useState("")
  return (
    
    <div className="App">
      <div className='h'><h1 >What About Dispatch ?</h1></div>
       <div className='' > 
      <label>FirstName: </label>
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={myfn} onChange={(e)=>setMyfn(e.target.value)}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(fname(myfn))}>Dispatch</button><br/>
        <label className='f2'>LastName: </label>
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={myln} onChange={(e)=>setMyln(e.target.value)}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(lname(myln))} >Dispatch</button><br/>
        <label class="block text-gray-500 font-bold" for="inline-full-name">Age:  </label>
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={myage} onChange={(e)=>setMyage(e.target.value)}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(Age(myage))} >Dispatch</button><br/>
        <label class="block text-gray-500 font-bold " for="inline-full-name">Gender: </label>
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={mygender} onChange={(e)=>setMygender(e.target.value)}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(Gender(mygender))}>Dispatch</button><br/>
        <label class="block text-gray-500 font-bold " for="inline-full-name">Profession: </label>
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={mypro} onChange={(e)=>setMypro(e.target.value)}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(profession(mypro))} >Dispatch</button><br/>
       <br/>
       
        </div>
        
<div className='fontt'>
      <div>FirstName: {firstName} </div>
      <div>LastName: {lastName} </div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
      <div>Profession: {Profession}</div>
    </div>
    </div>
  );
}

export default App;
