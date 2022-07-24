export default function CourseCard() {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="">
                    <img className="rounded-t-lg w-72" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                </div>
                <div className="p-3">
                    <a href="/course/1" className="text-gray-900 font-medium mb-2">Card title</a>
                </div>
            </div>
        </div>
    )
}