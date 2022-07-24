import CourseHeader from "../../../components/CourseHeader"
import CourseIntroduction from "../../../components/CourseIntroduction"
import CourseNav from "../../../components/CourseNav"
import CourseTab from "../../../components/CourseTab"
import HeadLink from "../../../components/HeadLink"
import NavList from "../../../components/NavList"

export default function Home() {
    return (
        <div>
            <nav className='flex justify-around items-center py-4 bg-amber-500'>
                <div className='relative w-36 h-10'>
                    <img src="https://qiniucssjs.gracg.com/imglogo2022/img-horizontal-white.png" layout='fill' objectFit='contain' />
                </div>
                <div className='flex items-center sm:divide-x divide-gray-300'>
                    <div className='hidden sm:flex space-x-8 pr-4'>
                        <HeadLink title="hello" />
                        <HeadLink title="hello" />
                        <HeadLink title="hello" />
                        <HeadLink title="hello" />
                        <NavList></NavList>
                    </div>
                    <button className='text-white font-semibold rounded-full border  border-blue-700 px-5 py-1.5 transition-all hover:border-2'>登录</button>
                </div>
            </nav>
            <div>
                <CourseHeader></CourseHeader>
            </div>
            <div>
                <CourseNav></CourseNav>
            </div>
            <div>
                <CourseIntroduction></CourseIntroduction>
            </div>
        </div>
    )

}