import Link from 'next/link';

export default function Sobre()
{
    return(
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/sobre'>Sobre</Link></li>
        </ul>
    )
}