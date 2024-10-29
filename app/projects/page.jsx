'use client'
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";

export default function Projects() {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push('/#projets',{scroll: true});
    }, []);


    return null;
}