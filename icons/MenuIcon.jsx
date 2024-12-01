import React from 'react';

// Destructure props to get className and other attributes like onClick
const MenuIcon = ({ className, onClick }) => (
    <svg
        version="1.1"
        viewBox="0 0 47 38"
        xmlns="http://www.w3.org/2000/svg"
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        className={className}
        onClick={onClick} // Apply the onClick handler here
    >
        <g transform="translate(-1.9159 -6.3019)">
            <g transform="matrix(1.0737 0 0 1.1176 -1.2027 16.699)">
                <path
                    d="m6.366 10.753c-1.91 0-3.462-1.49-3.462-3.326 0-1.835 1.552-3.326 3.462-3.326h36.074c1.911 0 3.462 1.491 3.462 3.326 0 1.836-1.551 3.326-3.462 3.326h-36.074z"
                    fill="currentColor"
                />
            </g>
            <g transform="matrix(1.0737 0 0 1.1176 -1.2027 1.7179)">
                <path
                    d="m6.366 10.753c-1.91 0-3.462-1.49-3.462-3.326 0-1.835 1.552-3.326 3.462-3.326h36.074c1.911 0 3.462 1.491 3.462 3.326 0 1.836-1.551 3.326-3.462 3.326h-36.074z"
                    fill="currentColor"
                />
            </g>
            <g transform="matrix(1.0737 0 0 1.1176 -1.2027 31.68)">
                <path
                    d="m6.366 10.753c-1.91 0-3.462-1.49-3.462-3.326 0-1.835 1.552-3.326 3.462-3.326h36.074c1.911 0 3.462 1.491 3.462 3.326 0 1.836-1.551 3.326-3.462 3.326h-36.074z"
                    fill="currentColor"
                />
            </g>
        </g>
    </svg>
);

export default MenuIcon;
