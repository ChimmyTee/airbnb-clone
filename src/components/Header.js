import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    // Import to use header tag for SEO purposes
    <header>

      {/* Use Nextjs P images, because it reduces file size significantly, compared to JPEG, etc */}
      <div className="relative flex items-center h-10">
        <Image src="https://links.papareact.com/qd3"
          fill
          sizes="(max-width: 4px) 100vw,
              (max-width: 12px) 50vw,
              33vw"
        />
      </div>

      <div>middle</div>
      <div>right</div>
    </header>
  )
}

export default Header