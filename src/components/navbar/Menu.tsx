import Link from 'next/link';
import React from 'react';

function Menu() {
    return (
        <ul>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link href="/dashboard">Repos</Link>
            </li>
            <li>
                <Link href="/dashboard">About</Link>
            </li>
        </ul>
    );
}

export default Menu;
