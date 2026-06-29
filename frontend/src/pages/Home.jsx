import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"
const Home = () => {
  const [books, setBooks] = useState([])
  const fetchBooks= async ()=>{
    const response= await axios.get("http://localhost:3000/books/")
    console.log("response", response.data);
    setBooks(response.data.datas)

  }
  useEffect(()=>{
    fetchBooks()
  },[])
  return (
    <>
    <Navbar/>
    <div className=" flex flex-wrap justify-center">
      {books.map((book)=>{
        return (
          <Card key={book.id} book={book}/>
        )
      })}
          
    </div>
    </>
  )
}


export default Home