import "../App.css";
import Topbar from "../components/topbar.component";
import Sidebar_main from "../components/sidebar_main.component";

function qudurat_Math() {
    let chapter = [
        "Qudurat_Math_Course",
        "Chapter_1",
        // 'Chapter_2',
        // 'Chapter_3',
    ];

    return (
        <div className="font-muli">
            <Topbar />

            <div className="flex">
                <Sidebar_main chapters={chapter} link={"qudurat_math"}/>
            </div>
        </div>
    );
}

export default qudurat_Math;
