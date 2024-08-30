import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-greyish text-text-color py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8 px-4">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Hostel Finder</h3>
          <p className="text-sm text-text-color">
            Hostel Finder is your trusted platform for finding the perfect hostel on campus. Get detailed information and make informed choices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-text-color">
            <li><a href="/" className="hover:text-secondary-color">Home</a></li>
            <li><a href="/hostels" className="hover:text-secondary-color">Hostels</a></li>
            <li><a href="/contact" className="hover:text-secondary-color">Contact Us</a></li>
            <li><a href="/about" className="hover:text-secondary-color">About Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-text-color">Email: support@hostelfinder.com</p>
          <p className="text-sm text-text-color">Phone: +123 456 7890</p>
          <p className="text-sm text-text-color">Address: 123 Campus Rd, KNUST - Kumasi</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-color hover:text-secondary-color" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.812c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.888h2.773l-.443 2.89h-2.33V21.88C18.344 21.127 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-color hover:text-secondary-color" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.94 4.94 0 002.165-2.725 9.87 9.87 0 01-3.127 1.195 4.923 4.923 0 00-8.384 4.488A13.957 13.957 0 011.671 3.149 4.917 4.917 0 003.15 9.723a4.9 4.9 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.946 4.894a4.935 4.935 0 01-2.224.084 4.93 4.93 0 004.6 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.779-.023-1.162-.067a13.95 13.95 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.422 0-.219-.005-.436-.014-.653A10.242 10.242 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-color hover:text-secondary-color" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.972.243 2.427.39a4.92 4.92 0 011.756.953 4.92 4.92 0 01.953 1.756c.147.455.336 1.257.39 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.243 1.972-.39 2.427a4.92 4.92 0 01-.953 1.756 4.92 4.92 0 01-1.756.953c-.455.147-1.257.336-2.427.39-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.972-.243-2.427-.39a4.92 4.92 0 01-1.756-.953 4.92 4.92 0 01-.953-1.756c-.147-.455-.336-1.257-.39-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.243-1.972.39-2.427a4.92 4.92 0 01.953-1.756 4.92 4.92 0 011.756-.953c.455-.147 1.257-.336 2.427-.39 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.052.072 5.78.13 4.869.31 4.126.637a6.844 6.844 0 00-2.482 1.63A6.84 6.84 0 00.637 4.126C.31 4.869.13 5.78.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.272.238 2.183.565 2.926a6.84 6.84 0 001.63 2.482 6.844 6.844 0 002.482 1.63c.743.327 1.654.507 2.926.565 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.272-.058 2.183-.238 2.926-.565a6.844 6.844 0 002.482-1.63 6.84 6.84 0 001.63-2.482c.327-.743.507-1.654.565-2.926.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.272-.238-2.183-.565-2.926a6.84 6.84 0 00-1.63-2.482A6.844 6.844 0 0019.874.637C19.131.31 18.22.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A4.002 4.002 0 1116 12a4.004 4.004 0 01-4 4.002zm6.406-10.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center text-sm text-text-color">
        <p>&copy; {new Date().getFullYear()} Hostel Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
