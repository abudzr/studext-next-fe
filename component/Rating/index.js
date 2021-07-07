import React from 'react'

function Rating() {
    return (
        <div className="relative w-full max-h-full bg-white shadow mt-4 rounded-3xl p-4 bg-rating bg-no-repeat bg-100%">
            <h1 className="font-bold">Peringkat</h1>
            <p>Hasil akhir perolehan nilai try out</p>
            <img className="absolute right-0 top-4" src="/image/trophy.png" alt="trophy" />
            <div className="flex text-blue-custom font-bold mt-2 mb-8">
                <span className="material-icons">file_download</span>
                <h4>Unduh .CSV</h4>
            </div>
            <div className="overflow-y-auto h-64 no-scrollbar">
                <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-200 flex justify-between p-4 rounded-2xl">
                    <div className="circle bg-white rounded-full px-2 font-bold">1</div>
                    <img src="/image/pict-first-place.png" width="24" height="24" alt="first-place" />
                    <h5 className="font-bold truncate" style={{ maxWidth: 90 }}>Alfredo Vetro</h5>
                    <div className="circle bg-white px-1 font-bold rounded-full text-green-400 ">40</div>
                    <div className="circle bg-white px-1 font-bold rounded-full text-red-400">0</div>
                    <div className="circle bg-white px-1 font-bold rounded-full">0</div>
                    <h5 className="font-bold">100</h5>
                </div>
                <div className="w-full mt-4 bg-gradient-to-r from-gray-400 to-gray-100 flex justify-between p-4 rounded-2xl">
                    <div className="circle bg-white rounded-full px-2 font-bold">2</div>
                    <img src="/image/pict-second-place.png" width="24" height="24" alt="second-place" />
                    <h5 className="font-bold truncate" style={{ maxWidth: 90 }}>Tatiana Franci</h5>
                    <div className="circle bg-white px-1 font-bold rounded-full text-green-400 ">39</div>
                    <div className="circle bg-white px-1 font-bold rounded-full text-red-400">1</div>
                    <div className="circle bg-white px-1 font-bold rounded-full">0</div>
                    <h5 className="font-bold">98</h5>
                </div>
                <div className="w-full mt-4 bg-gradient-to-r from-orange-custom  flex justify-between p-4 rounded-2xl">
                    <div className="circle bg-white rounded-full px-2 font-bold">3</div>
                    <img src="/image/third.png" width="24" height="24" alt="third-place" />
                    <h5 className="font-bold truncate" style={{ maxWidth: 90 }}>Haylie Press</h5>
                    <div className="circle bg-white px-1 font-bold rounded-full text-green-400 ">35</div>
                    <div className="circle bg-white px-1 font-bold rounded-full text-red-400">3</div>
                    <div className="circle bg-white px-1 font-bold rounded-full">2</div>
                    <h5 className="font-bold">90</h5>
                </div>
                <div className="w-full mt-4 bg-gradient-to-r from-gray-100 to-gray-50  flex justify-between p-4 rounded-2xl">
                    <div className="circle bg-white rounded-full px-2 font-bold">4</div>
                    <img src="/image/four.png" width="24" height="24" alt="four-place" />
                    <h5 className="font-bold truncate" style={{ maxWidth: 90 }}>Jordyn Siphare</h5>
                    <div className="circle bg-white px-1 font-bold rounded-full text-green-400 ">30</div>
                    <div className="circle bg-white px-1 font-bold rounded-full text-red-400">5</div>
                    <div className="circle bg-white px-1 font-bold rounded-full">5</div>
                    <h5 className="font-bold">80</h5>
                </div>
                <div className="w-full mt-4 bg-gradient-to-r from-gray-100 to-gray-50  flex justify-between p-4 rounded-2xl">
                    <div className="circle bg-white rounded-full px-2 font-bold">5</div>
                    <img src="/image/four.png" width="24" height="24" alt="other-place" />
                    <h5 className="font-bold truncate" style={{ maxWidth: 90 }}>Ruben Varanes</h5>
                    <div className="circle bg-white px-1 font-bold rounded-full text-green-400 ">29</div>
                    <div className="circle bg-white px-1 font-bold rounded-full text-red-400">11</div>
                    <div className="circle bg-white px-1 font-bold rounded-full">0</div>
                    <h5 className="font-bold">78</h5>
                </div>
            </div>
        </div >
    )
}

export default Rating
