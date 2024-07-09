import { useEffect } from "react";

export default function Sidebar({chapters, link}){
    useEffect(() => {  
        var size = chapters.length;
        for (let i = 0; i < size; i++){
            let div = document.createElement('a');
            let x = chapters[i].replace('_', ' ');
            div.textContent = x;
            div.style.display = 'block'
            div.href = link + '/' + chapters[i];

            document.getElementById("main").appendChild(div);
        }
    }, [chapters, link])

    return <div className="">
        <div className="w-96 h-screen">
            <div className="w-96 h-full border-r p-6 border-gray-400 bg-gray-100">
                <div id="main" className="h-full w-full p-6 bg-white rounded-md border border-gray-400">
                    
                </div>
            </div>
        </div>

    </div>;
}   