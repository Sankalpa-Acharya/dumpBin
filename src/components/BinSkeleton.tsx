import { Skeleton } from "@/components/ui/skeleton"

export default function BinSkeleton() {
    return (
        <div>

            <div className="p-4 w-[100%] h-[10rem] ">
                <div className="flex justify-between">
                    <Skeleton className="w-[170px] h-[30px]"></Skeleton>
                    <div className="flex gap-3">
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                    </div>
                </div>
                <Skeleton className="w-[170px] mt-4 h-[15px]"></Skeleton>
                <Skeleton className="w-[60px] mt-5 h-[20px] rounded-full"></Skeleton>
            </div >


            <div className="p-4 w-[100%] h-[10rem] ">
                <div className="flex justify-between">
                    <Skeleton className="w-[170px] h-[30px]"></Skeleton>
                    <div className="flex gap-3">
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                    </div>
                </div>
                <Skeleton className="w-[170px] mt-4 h-[15px]"></Skeleton>
                <Skeleton className="w-[60px] mt-5 h-[20px] rounded-full"></Skeleton>
            </div >


            <div className="p-4 w-[100%] h-[10rem] ">
                <div className="flex justify-between">
                    <Skeleton className="w-[170px] h-[30px]"></Skeleton>
                    <div className="flex gap-3">
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                        <Skeleton className="w-[50px] h-[30px]"></Skeleton>
                    </div>
                </div>
                <Skeleton className="w-[170px] mt-4 h-[15px]"></Skeleton>
                <Skeleton className="w-[60px] mt-5 h-[20px] rounded-full"></Skeleton>
            </div >
        </div>

    )
}
