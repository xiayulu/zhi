import Chapter from "../../../../components/Chapter";
import ChapterNav from "../../../../components/ChapterNav";
import Header from "../../../../components/Header";

function ChapterDetail() {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-5">
                <div>
                    <ChapterNav></ChapterNav>
                </div>
                <div className="col-span-4">
                    <Chapter></Chapter>
                </div>
            </div>
        </div>
    );
}

export default ChapterDetail;