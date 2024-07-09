export default function Grid(){

    return <div className="overflow-hidden relative">

        <b className="w-full flex text-3xl my-12">Top Courses</b>

        <div className="flex mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
                <form action='qudurat_math' className="h-36 w-full">
                    <button className="curser-pointer hover:bg-gray-200 rounded-lg p-4 bg-gray-100 shadow-md w-full h-36">
                        Amazing Qudurat Course
                    </button>
                    
                </form>
                
                
            </div>
        </div>
    </div>;
}