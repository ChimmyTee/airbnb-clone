import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    // Import to use header tag for SEO purposes
    <header>

      {/* Use Nextjs P images, because it reduces file size significantly, compared to JPEG, etc */}
      <div className="cursor-pointer">
        <Image src="https://links.papareact.com/qd3"
          width={200}
          height={200}
          style={{ objectFit: 'fill'}}
        />
      </div>

      <div className="text-sky-400"><h4>middle</h4></div>
      <div>right</div>
    </header>
  )
}

export default Header