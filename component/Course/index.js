import React from 'react'

function Course() {
    return (
        <div className="w-full h-64 bg-white shadow mt-4 mb-4 rounded-3xl p-4">
            <h1 className="font-bold">Course Preview</h1>
            <div className="flex overflow-x-auto no-scrollbar">
                {Array.from(Array(6)).map((data, index) => {
                    return (
                        <div className="w-full h-full bg-white shadow mt-4 mr-4 rounded-3xl p-4" key={index}>
                            <div className="flex w-72 h-full justify-between">
                                <img className="mr-4" src="image/course.png" alt="course" />
                                <div>
                                    <div className="flex justify-between">
                                        <h2>TOEFL</h2>
                                        <i className="material-icons mr-4" style={{ color: "#008FFF" }}>
                                            arrow_forward_ios
                                        </i>
                                    </div>
                                    <div className="flex justify-between">
                                        {Array.from(Array(5)).map((data, index) => {
                                            return (
                                                <span className="material-icons" key={index} style={{ color: "#F7C200" }}>
                                                    star
                                                </span>
                                            )
                                        })}
                                        <p>(20)</p>
                                    </div>
                                    <div className="flex ">
                                        <img src="/image/course-hero.png" alt="course hero" />
                                        <p className="ml-2">By Course Hero</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <i className="material-icons text-gray-400">
                                            person
                                        </i>
                                        <h5 className="font-bold">203 Pelajar, 4 Guru</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-3 justify-between">
                                <div className="max-w-max h-full bg-red-300 font-bold mt-4 rounded-3xl p-1">Mulai: <span style={{ fontSize: "10px", fontWeight: "bold", color: "#DB0038" }}> 17 Agustus 2020</span></div>
                                <div>
                                    <p style={{ textDecoration: "line-through" }}>Rp 2.000.000</p>
                                    <h4 className="text-tosca font-bold">Rp 1.500.000</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <div className="w-full bg-white shadow mt-4 mb-4 p-16 rounded-3xl bg-white flex items-center justify-center" style={{ color: "#008FFF", height: "184px" }}>
                        <h3 >See More(999+)</h3>
                        <span className="material-icons " style={{ color: "#008FFF", marginLeft: "20px" }} >
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Course