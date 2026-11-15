import { MessageCircle } from 'lucide-react'
export default function WhatsAppButton({children='Contact on WhatsApp', className=''}) {return <a className={`button button-secondary ${className}`} href="https://wa.me/27743716637" target="_blank" rel="noreferrer"><MessageCircle size={18}/>{children}</a>}
