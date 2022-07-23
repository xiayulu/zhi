import Image from 'next/image'
import HeadLink from '../components/HeadLink'

export default function Home() {
  return (
    <nav className='bg-amber-400'>
      <div className='relative w-36 h-10'>
        <Image src="https://qiniucssjs.gracg.com/imglogo2022/img-horizontal-white.png" layout='fill' objectFit='contain' />
      </div>
      <div className='flex items-center sm:divide-x divide-gray-300'>
        <div className='hidden sm:flex space-x-8 pr-4'>
          <HeadLink title="hello" />
          <HeadLink title="hello" />
          <HeadLink title="hello" />
          <HeadLink title="hello" />
        </div>
      </div>
    </nav>
  )
}