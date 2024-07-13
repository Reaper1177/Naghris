import "../App.css";
import Topbar from "../components/topbar.component";
import Sidebar_main from "../components/sidebar_main.component";

function Chapter_View() {
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
                <Sidebar_main chapters={chapter} link={"../qudurat_math"} />

                <div className="grid grid-cols-1 bg-gray-50 p-12 w-full gap-12">
                    <div className="text-left font-extrabold text-4xl">
                        Qudurat (GAT) Math Course
                    </div>
                    <div className="w-1/2 translate-x-1/2">
                        This course offers a comprehensive journey through
                        essential mathematical concepts, from basic arithmetic
                        to advanced problem-solving techniques. Whether you're a
                        beginner or seeking to strengthen your skills, our
                        engaging lessons and practical examples will guide you
                        toward mathematical proficiency. Join us and unlock your
                        potential!
                    </div>
                    <div className="bg-white border-2 h-48 p-6">
                        <div className="text-xl font-bold text-left mb-2">
                            <a className="hover:text-blue-900" href="Chapter_1">Chapter 1</a>
                        </div>
                        <hr className="my-4"></hr>
                        <div className="grid grid-cols-2 justify-between text-left gap-4">
                            <a href='Chapter_1/Lecture_1'>Lecture 1</a>
                            <a href='Chapter_1/Quiz_1'>Quiz 1</a>
                            <a href='Chapter_1/Readin_1'>Reading 1</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Chapter_View;
