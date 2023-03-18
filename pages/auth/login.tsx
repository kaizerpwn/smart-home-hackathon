
import Head from 'next/head' 
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import { getCsrfToken } from "next-auth/react"
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from 'next-auth'
import options from "../api/auth/[...nextauth]";
import { imageLoader } from '@/lib/ImageLoader'
import Image from 'next/image';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, options);
    if (session) {
        return { redirect: { destination: "/panel" } };
    }
    const csrfToken = await getCsrfToken(context)
    return {
        props: { csrfToken },
    }
}

export default function Login({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [texts, setTexts] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value][0] }));
    }

    const handleSignIn = () => {
        signIn("credentials", { email: texts.email, password: texts.password, callbackUrl: '/panel' });
    }

    const { data: session } = useSession()
    return (
        <>
            <Head>
                <title>Login to your account - BHUB.me</title>
                <meta name="description" content="BHUB is a modern and interactive platform for learning to code. With BHUB, you can learn at your own pace and take your coding skills to the next level." />
                <meta name="author" content="Polo Development" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='flex items-center justify-center' style={{ height: "100vh" }}>
                <div className="w-full max-w-md p-4 mx-auto rounded-md shadow sm:p-8 dark:bg-gray-700 dark:text-gray-100"> 
                    <Image loader={imageLoader} className="flex justify-center object-cover object-center mx-auto rounded-3xl" alt="HomeLab logotype on sign in page" src={`/images/logo.png`} width={300} height={200} />
                    <h2 className="mb-3 text-3xl font-semibold text-center">Prijavite se</h2> 
                    <div className="flex items-center w-full my-4"> 
                    </div>
                    <form className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm">Email adresa</label>
                                <input type="email" name="email" id="email" placeholder="vasemail@homelab.com" value={texts.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm">Lozinka</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Zaboravili ste lozinku?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="********" value={texts.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                        </div>
                        <button type="button" className="w-full px-8 py-3 font-semibold duration-500 rounded-md dark:bg-violet-400 dark:text-gray-800 hover:bg-secondaryColor" onClick={handleSignIn}>Prijavite se</button>
                    </form>
                </div>
            </main>
        </>
    )
} 