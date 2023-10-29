import Image from 'next/image'
import Card from './components/Card'
export default function Home() {
  return (
    <div className='grid grid-cols-3 min-h-screen w-full justify-self-center justify-items-center content-center bg-gradient-to-r from-violet-200 to-pink-200'>
    <Card src={'/mirage.png'}></Card>
    <Card src={'/inferno.png'}></Card>
    <Card src={'/overpass.png'}></Card>
    <Card src={'/nuke.png'}></Card>
    <Card src={'/action.png'}></Card>
    <Card src={'/anubis.png'}></Card>
    <Card src={'/vertigo.png'}></Card>
    </div>
  )
}
