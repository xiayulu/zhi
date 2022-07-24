import CourseCard from "./CourseCard";

export default function CourseCategory() {
    const courses = [1, 2, 3, 4, 5, 6, 7,8];
    const courseItems = courses.map(course => <CourseCard key={course}></CourseCard>);
    return (
        <div className="mx-6">
            <div className="flex my-3 p">
                <h3 className="text-3xl">数学</h3>
                <a href="#!" className="ml-auto"> 更多&gt;&gt;</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {courseItems}
            </div>
        </div>
    )
}