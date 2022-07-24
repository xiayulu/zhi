import ExerciseHome from "../../../../components/ExerciseHome"
import ExerciseNav from "../../../../components/ExerciseNav";
import Header from "../../../../components/Header";

export default function ChapterHome() {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-5">
                <div>
                    <ExerciseNav />
                </div>
                <div className="col-span-4">
                    <ExerciseHome />
                </div>
            </div>
        </div>
    )
}