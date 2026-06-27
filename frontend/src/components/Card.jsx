import { Link } from "react-router-dom"

function Card(){
    return(
        <>
        <Link to={"/single-page"}>
        
     <div className="flex px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
        perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
      <button type="button" class="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
                <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
  </div>
</div>
</Link>
        </>
    )
}
export default Card