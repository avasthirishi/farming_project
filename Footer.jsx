import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Organic Farming. All Rights Reserved to Rishikesh Awasthi.</p>
                    <p className="text-sm mt-1">Last updated: {new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</p>
                </div>
            </div>
        </footer>
    );
}
