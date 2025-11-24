const ACHLogo = ({ className = "w-6 h-6", strokeColor = "currentColor" }) => (
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
      d="m7 9 7-7M7.085 9.219l1.752 4.505c.154.397.231.595.342.653.097.05.212.05.308 0 .111-.057.189-.256.344-.652l4.393-11.259c.14-.358.21-.537.172-.651a.33.33 0 0 0-.21-.21c-.115-.04-.294.03-.652.17L2.274 6.17c-.397.155-.595.232-.653.344a.33.33 0 0 0 0 .307c.058.111.257.189.654.343L6.78 8.915c.08.031.12.047.155.071q.045.033.077.078c.025.034.04.074.072.155Z"
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

export default ACHLogo;