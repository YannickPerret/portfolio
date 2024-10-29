'use client'
import ShowProjects from "@components/ShowProjects";
import { useParams } from 'next/navigation'
import Navbar from "@components/Navbar";

export default function Page() {
    const params = useParams()
    const {slug} = params

    return (
        <>
            <Navbar isScroll={true} />
            <ShowProjects slug={slug} />
        </>
    )
}