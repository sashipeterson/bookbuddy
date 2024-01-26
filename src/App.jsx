import { useState } from 'react'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import Navigation from './components/Navigations'
import Login from './components/Login'

import Registration from './components/Register'
// import { fetchBooks } from "./api/bookBuddyApi"


function App() {

  return (
    <>
      <h1><img id='logo-image' src={bookLogo} />Library App</h1>
      <Registration />
      <Login />
      <Navigation />
      <Books />
    </>
  )
}

export default App