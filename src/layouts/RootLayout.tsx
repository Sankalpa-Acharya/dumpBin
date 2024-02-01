import { Outlet } from 'react-router'
import NavBar from '@/components/NavBar'
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout() {
    return (
        <div className='flex flex-col items-center'>
            <Toaster />
            <div className='max-w-[60rem] px-5 lg:px-0 mt-5 w-full'>
                <header>
                    <NavBar></NavBar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
