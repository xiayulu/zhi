export default function CourseNav() {
    return (
        <div className="flex">
            <ul className="flex space-x-8 ml-16 my-4">
                <li className="nav-item">
                    <a className="nav-link" href="/course/1">简介</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/course/1/hire">职位</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/course/1/exercise">练习</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/course/1/discuss">答疑</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/course/1/manage">管理</a>
                </li>
            </ul>
        </div>
    )
}