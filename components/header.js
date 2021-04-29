import Link from "next/link"

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/contact">
        Contact
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/products">
        Products
      </Link>
      <Link href="/articles">
        Articles
      </Link>
    </header>
  )
}
