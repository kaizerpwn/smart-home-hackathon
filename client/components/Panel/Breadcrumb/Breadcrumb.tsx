import Link from "next/link";
import { useRouter } from "next/router"
import {AiOutlineHome} from "react-icons/ai"
import {MdArrowRight} from "react-icons/md"

const Breadcrumb = () => {
    const router = useRouter();

    return (
        <>
            <div aria-label="breadcrumb" className="w-full p-4">
                <ol className="flex h-8 space-x-2">
                    <li className="flex items-center">
                        <Link rel="noopener noreferrer" href="/" title="Back to homepage" className="hover:underline"> 
                            <AiOutlineHome className="w-5 h-5"/>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <MdArrowRight className="w-6 h-6"/>
                        <Link rel="noopener noreferrer" href={router.pathname} className="flex items-center px-1 capitalize">{router.pathname.includes('/panel/') ? (router.pathname.replace('/panel/', '')) : (router.pathname.replace('/', ''))}</Link>
                    </li> 
                </ol>
            </div>
        </>
    )
}

export default Breadcrumb