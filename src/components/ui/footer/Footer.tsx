import Link from "next/link"


export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">

        <Link href="/">
            <span className='antialiased font-bold'>El Gigante de los Azulejos </span>
            <span>©{ new Date().getFullYear() }</span>
        </Link>

        <Link href="/" className="mx-3">
           Privacidad & Legal
        </Link>

        <Link href="/">
           Ubicaciones
        </Link>

    </div>
  )
}
