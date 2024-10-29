'use client'
import ShowProjects from "@components/ShowProjects";
import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams()
    const {slug} = params

    return (
        <ShowProjects slug={slug} />
    )
}