import React from 'react'
import { useSelector } from 'react-redux'
import { useMemo,useState } from 'react'
import Tasklist from '../features/tasks/Tasklist'
import Searchbar from '../components/Searchbar'
const Dashboard = () => {
    const task=useSelector((state)=>state.task);
    const [search,setsearch]=useState('');

    const filtertask=useMemo(
        ()=>task.filter(
            (t)=>
                t.name.toLowerCase().includes(search.toLowerCase())),
        [task,search]
    ); 
  return (
    <>
    <Searchbar onsearch={setsearch}/>
    <Tasklist task={filtertask}/>
    </>
  )
}

export default Dashboard