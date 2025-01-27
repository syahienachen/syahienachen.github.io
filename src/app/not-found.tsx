"use-client"

import { Fragment } from "react"
import Link from "next/link"

export default function NotFound() {
    return (
        <Fragment>
            <div>404</div>
            <Link href="/">Back To Home</Link>
        </Fragment>
    )
}
