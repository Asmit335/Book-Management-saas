import axios from "axios"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage(){
    const {id}=useParams()
    const navigate=useNavigate()
    const [singleBook, setSingleBook] = useState({})
    const fetchSingleBook=async()=>{
        const response=await axios.get(`http://localhost:3000/books/${id}`)
        setSingleBook(response.data.data)
    }
    useEffect(()=>{
        fetchSingleBook()
    },[id])

    const deleteBook=async()=>{
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this book?"
        );
        
        if (!isConfirmed) {
            return;
        }
       const response= await axios.delete(`http://localhost:3000/books/${id}`)
        alert("Book deleted successfully!");
        if(response.status===200){
            navigate("/")
            console.log(response.status,"status");
            
        }else{
            alert("Something went wrong!")
        }
    }
    return(
        <>
        <Navbar/>
     <div className="flex flex-wrap justify-center px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{singleBook.bookName}</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
        perferendis eaque, exercitationem praesentium nihil.
      </p>
      <p>${singleBook.bookPrice}</p>
    </div>
    <div className="flex justify-center">
      <button onClick={deleteBook} type="button" className=" items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Delete
            </button>
    </div>        
  </div>
</div>

        </>
    )
}
export default SinglePage