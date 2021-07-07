import React from 'react'

function Story() {
    return (
        <div className="w-full h-36 bg-white shadow mt-4 rounded-3xl p-4 ">
            <h1 className="font-bold">Story</h1>
            <div className="mt-2 flex overflow-x-auto no-scrollbar">
                {Array.from(Array(13).keys()).map((data, index) => {
                    return (
                        <>
                            <div key={`story-${index}`} className="mr-4" >
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-green-200 rounded-full">
                                    <img className="ml-0.5 pt-0.5" src="/image/story.png" width="52" height="52" alt="story" />
                                </div>
                                <p className="truncate" style={{ maxWidth: 70 }}>Marilyn Ghifari</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div >
    )
}

export default Story