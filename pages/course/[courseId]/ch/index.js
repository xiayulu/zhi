import ChapterHome from "../../../../components/ChapterHome";
import ChapterNav from "../../../../components/ChapterNav";
import Header from "../../../../components/Header";

export default function ChapterHome() {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-5">
                <div>
                    <ChapterNav></ChapterNav>
                </div>
                <div className="col-span-4">
                    <ChapterHome />
                </div>
            </div>
        </div>
    )
}