import { Link } from 'react-router-dom'
import { Binary, Github } from 'lucide-react';
import { Button } from './ui/button';

export default function () {
    return (
        <div className='py-10'>
            <div className='flex justify-between' >
                <div>
                    <Link to='/' className='text-xl flex items-center font-bold'>/dumpBin <Binary /></Link>
                </div>
                <div className='flex gap-5 items-center'>
                    <Link to='/' className='hover:underline'>Home</Link>
                    <Link to='/view' className='hover:underline'>View</Link>
                    <Link to='https://github.com/sankalpa-acharya'>
                        <Button variant='outline'>
                            <Github size={18}></Github>
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
