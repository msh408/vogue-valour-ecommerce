import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
<footer className="bg-surface border-t border-outline-variant">
<div className="max-w-360 mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
<div className="md:col-span-4">
<span className="font-headline-lg text-headline-lg text-primary block mb-6">Vogue &amp; Valour</span>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-8">Crafting a legacy of timeless elegance and unparalleled quality since 1994.</p>
<div className="flex gap-6">
<NavLink className="hover:text-primary transition-colors" to="#">Instagram</NavLink>
<NavLink className="hover:text-primary transition-colors" to="#">Journal</NavLink>
<NavLink className="hover:text-primary transition-colors" to="#">Pinterest</NavLink>
</div>
</div>
<div className="md:col-span-2 space-y-4">
<h4 className="font-label-caps text-label-caps font-bold text-primary mb-6">Collections</h4>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">New Arrivals</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Women's Edit</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Men's Edit</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">The Icons</NavLink>
</div>
<div className="md:col-span-2 space-y-4">
<h4 className="font-label-caps text-label-caps font-bold text-primary mb-6">Assistance</h4>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Customer Service</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Shipping &amp; Returns</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Contact</NavLink>
<NavLink className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="#">Privacy Policy</NavLink>
</div>
<div className="md:col-span-4">
<h4 className="font-label-caps text-label-caps font-bold text-primary mb-6">The Valour Society</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Join our inner circle for exclusive previews and sartorial inspirations.</p>
<div className="flex border-b border-outline-variant focus-within:border-primary transition-colors pb-2">
<input className="bg-transparent border-none focus:ring-0 w-full p-0 font-body-md text-body-md outline-none" placeholder="Email address" type="email"/>
<button className="font-label-caps text-label-caps hover:opacity-70">JOIN</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-outline-variant/30">
<p className="font-body-md text-[13px] text-on-surface-variant">© 2024 Vogue &amp; Valour. All Rights Reserved.</p>
<div className="flex gap-8 mt-6 md:mt-0">
<p className="font-label-caps text-[11px] text-on-surface-variant">MADE WITH CARE IN MILAN</p>
<p className="font-label-caps text-[11px] text-on-surface-variant">GLOBAL SHIPPING AVAILABLE</p>
</div>
</div>
</div>
</footer>
    </div>
  )
}

export default Footer
