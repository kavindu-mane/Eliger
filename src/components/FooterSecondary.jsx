import React from 'react'

const FooterSecondary = () => {
  return (
    <div className="absolute bottom-3 start-0 w-full text-center text-xs font-semibold text-gray-500">
      Copyrights 2023 eliger.com
      <a href="/privacy" target="_blank" className="mx-1">
        privacy policy
      </a>
      |
      <a href="/terms" target="_blank" className="mx-1">
        terms
      </a>
      |
      <a href="/faq" target="_blank" className="mx-1">
        FAQ
      </a>
    </div>
  );
}

export default FooterSecondary