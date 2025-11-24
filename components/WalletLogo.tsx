const WalletLogo = ({ className = "w-6 h-6", strokeColor = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke={strokeColor}
    strokeWidth="1.5"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.667 6.667H1.333m6 2.666H4M1.333 5.467v5.066c0 .747 0 1.12.146 1.406.128.25.331.454.582.582.286.146.659.146 1.406.146h9.066c.747 0 1.12 0 1.406-.146.25-.127.455-.331.582-.582.146-.286.146-.659.146-1.406V5.467c0-.747 0-1.12-.146-1.406a1.33 1.33 0 0 0-.582-.582c-.286-.146-.659-.146-1.406-.146H3.467c-.747 0-1.12 0-1.406.146-.25.128-.454.332-.582.582-.146.286-.146.659-.146 1.406"
    />
  </svg>
);

// Usage examples:
// Default (inherits text color):
// <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
//   <CreditCard className="w-6 h-6" />
// </div>

// Custom stroke color:
// <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//   <CreditCard className="w-6 h-6" strokeColor="#3b82f6" />
// </div>

// Custom background using the div's bg class:
// <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//   <CreditCard className="w-6 h-6 text-purple-600" />
// </div>

export default WalletLogo;