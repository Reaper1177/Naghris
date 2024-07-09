import { useEffect } from "react";
import logo from "../images/sample logo.png"

export default function Sidebar_main({chapters, link}){
    useEffect(() => {  
        var size = chapters.length;
        for (let i = 0; i < size; i++){
            
            let div = document.createElement('a');
            let x = chapters[i].replace(new RegExp("_", "g"), ' ')

            div.textContent = x;
            
            let hr = document.createElement('div');
            let pic = document.createElement('img');

            div.className = 'block text-left p-4 hover:pl-3 hover:bg-blue-50 hover:border-l-4 hover:border-blue-500';
            div.href = link + '/' + chapters[i];
            hr.innerHTML = '<hr />';

            pic.className = 'w-9 absolute h-auto left-16 -translate-y-[17.5%]';
            pic.src = `${logo}`;
            
            document.getElementById("main").appendChild(div);
            document.getElementById("main").appendChild(hr);

            if(i === 0){
                div.id = 'big'
                div.className = 'flex font-bold text-left pl-16 p-4 hover:pl-[60px] hover:bg-blue-50 hover:border-l-4 hover:border-blue-500';
                document.getElementById('big').prepend(pic);
            }
        }
    }, [chapters])

    return <div className="">
        <div className="w-96 h-screen">
            <div className="w-96 h-full border-r p-6">
                <div id="main" className="h-full w-full p-6 bg-white">
                    
                </div>
            </div>
        </div>

    </div>;
}   