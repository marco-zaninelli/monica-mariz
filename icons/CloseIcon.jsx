import React from 'react';

const CloseIcon = ({ className, onClick }) => {
    return (
        <svg
            className={className} // Apply the className here
            onClick={onClick}
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
        >
            <g transform="translate(-4.0146 -4.0146)">
                <g transform="matrix(1.2619 0 0 1 -6.179 -6.973)">
                    <path
                        d="m8.94 17.332c-1.149-1.451-1.149-3.806 0-5.256 1.15-1.451 3.016-1.451 4.166 0l27.37 34.538c1.15 1.451 1.15 3.806 0 5.256-1.149 1.451-3.016 1.451-4.165 0l-27.371-34.538z"
                        fill="currentColor"
                    />
                </g>
                <g transform="matrix(0 1.2619 -1 0 56.973 -6.179)">
                    <path
                        d="m8.94 17.332c-1.149-1.451-1.149-3.806 0-5.256 1.15-1.451 3.016-1.451 4.166 0l27.37 34.538c1.15 1.451 1.15 3.806 0 5.256-1.149 1.451-3.016 1.451-4.165 0l-27.371-34.538z"
                        fill="currentColor"
                    />
                </g>
            </g>
        </svg>
    );
};

export default CloseIcon;
