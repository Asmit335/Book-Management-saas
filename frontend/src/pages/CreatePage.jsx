import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

 
function CreatePage(){
  const navigate=useNavigate()
  const [addBook, setAddBook] = useState({
    bookName: "",
    bookPrice: "",
    bookAuthor: "",
    bookGenre: "",
  })
  const fetchToAddBook=async(e)=>{
    e.preventDefault()
    const response=await axios.post("http://localhost:3000/books",addBook)
    if(response.status===200){
      navigate("/")
    }else{
      alert("Something went wrong!");
      
    }
    
   }
   
   const handleChange=(e)=>{
    let{name,value}=e.target
    setAddBook({
      ...addBook,
        [name]:value
    })
  }

  // console.log(addBook);
  

    return(
        <>
        <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
  <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
    <h2 className="mb-6 text-center text-3xl font-bold text-[#07074D]">
      Add New Book
    </h2>

    <form onSubmit={fetchToAddBook}>
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
          value={addBook.bookName}
          onChange={handleChange}
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
          value={addBook.bookPrice}
          onChange={handleChange}
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
          value={addBook.bookAuthor}
          onChange={handleChange}
          placeholder="Enter author name"
          defaultValue="Asmit Khanal"
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
          value={addBook.bookGenre}
          onChange={handleChange}
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
        className="w-full rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700"
      >
        Create Book
      </button>
    </form>
  </div>
</div>
        </>
    )
}
export default CreatePage