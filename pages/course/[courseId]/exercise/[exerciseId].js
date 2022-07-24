import Exercise from "../../../../components/Exercise";
import ExerciseNav from "../../../../components/ExerciseNav";
import Header from "../../../../components/Header";

function ExerciseDetail() {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-5">
                <div>
                    <ExerciseNav></ExerciseNav>
                </div>
                <div className="col-span-4">
                    <Exercise></Exercise>
                </div>
            </div>
        </div>
    );
}

export default ExerciseDetail;