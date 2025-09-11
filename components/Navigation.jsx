import Link from "next/link"


const Navigation = () => {
  return (
   <header className="grid grid-cols-2">
            <div className="thapa">
            <nav>
                <ul className=" flex justify-center gap-4">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                   
                </ul>
            </nav>
            </div>
        </header>
  )
}

export default Navigation