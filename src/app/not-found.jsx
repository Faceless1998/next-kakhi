import Link from "next/link"

const NotFound = () =>{
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry, the Page you are looking for is not avaliable right now</p>
            <Link href="/">Return Home</Link> 
        </div>
    )
}

export default NotFound