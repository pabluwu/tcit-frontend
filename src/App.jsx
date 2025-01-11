import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from './store/post/slice'

import Filter from './components/Filter/Filter'
import Table from './components/Table/Table'
import Create from './components/Create/Create'

import { API } from './assets/variables'
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch(`${API}post`);
      if (!response.ok) {
        throw new Error('Response error');
      }
      const data = await response.json();
      
      dispatch(loadData(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='container'>
        <Filter/>
        <Table/>
        <Create />
      </div>
    </>
  )
}

export default App
