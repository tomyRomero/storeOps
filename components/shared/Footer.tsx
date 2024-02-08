import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {

  const navLinks = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Shop",
      link: "/products"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/contact"
    }
  ]

  const socials = [
    {
      icon: "/assets/facebook.png",
      title: "facebook icon",
      link: "https://facebook.com"
    },
    {
      icon: "/assets/instagram.png",
      title: "instagram icon",
      link: "https://instagram.com"
    },
    {
      icon: "/assets/twitter.png",
      title: "twitter icon",
      link: "https://twitter.com"
    }
  ]

  return (
    <footer className="mt-10 w-full bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((navLink, index) => (
              <div key={index}>
                <li key={index}>
                  <Link className="text-white hover:text-white" href={`${navLink.link}`}>
                    {navLink.title}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {socials.map((social, index)=> (
              <div key={index}>
               <Link href={`${social.link}`} target="#blank">
               <Image
               src={`${social.icon}`}
               alt={`${social.title}`}
               width={24}
               height={24}
               className="h-6 w-6 hover:scale-150 duration-100 ease-out"
               />
             </Link>
             </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-white mb-4">Subscribe to our newsletter for latest updates</p>
          <form className="flex space-x-2">
            <Input className="flex-1 bg-gray-200 text-black" placeholder="Enter your email" type="email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-body-bold text-white">© 2024 PaletteHub. All rights reserved.</div>
    </footer>
  )
}


