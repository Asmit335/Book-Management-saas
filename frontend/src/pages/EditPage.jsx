import axios from "axios"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function EditPage(){
  const {id}=useParams()
  const navigate=useNavigate()

  
  const [updateBookItem, setUpdateBookItem] = useState({
    bookName:"",
    bookAuthor:"",
    bookPrice:"",
    bookGenre:""
  })
  const fetchExistingBook=async()=>{
    const response=await axios.get(`https://book-management-saas.onrender.com/books/${id}`)
    setUpdateBookItem(response.data.data)
  }
  useEffect(()=>{
    fetchExistingBook()
  },[id])

  const updateBook=async(e)=>{
    e.preventDefault()
    const response=await axios.patch(`https://book-management-saas.onrender.com/books/${id}`,updateBookItem)
    if(response.status===200){
      alert("Book Updated Sucessfully.")
      navigate(`/single-page/${id}`)
    }else{
      alert("Something went wrong!")
    }
  }

  const handleChange=(e)=>{
    setUpdateBookItem({
      ...updateBookItem,
      [e.target.name]:e.target.value
    })
  }

    return(
      <>
        <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
  <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
    <h2 className="mb-6 text-center text-3xl font-bold text-[#07074D]">
      Update Book
    </h2>

    <form onSubmit={updateBook}>
      {/* Book Name */}
      <div className="mb-5">
        <label
          htmlFor="bookName"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          onChange={handleChange}
          value={updateBookItem.bookName}
          placeholder="Enter book name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Book Price */}
      <div className="mb-5">
        <label
          htmlFor="bookPrice"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Book Price
        </label>
        <input
          type="number"
          id="bookPrice"
          name="bookPrice"
          onChange={handleChange}
          value={updateBookItem.bookPrice}
          placeholder="Enter price"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Book Author */}
      <div className="mb-5">
        <label
          htmlFor="bookAuthor"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Book Author
        </label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          onChange={handleChange}
          value={updateBookItem.bookAuthor}
          placeholder="Enter author name"
           className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />
      </div>

      {/* Book Genre */}
      <div className="mb-6">
        <label
          htmlFor="bookGenre"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Book Genre
        </label>

        <select
          id="bookGenre"
          name="bookGenre"
          onChange={handleChange}
          value={updateBookItem.bookGenre}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="History">History</option>
          <option value="Biography">Biography</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </select>
      </div>

       <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700"
      >
        Update
      </button>
    </form>
  </div>
</div>
        </>
    )
}
export default EditPage