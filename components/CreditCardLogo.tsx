const CreditCard = ({ className = "w-6 h-6", strokeColor = "currentColor" }) => (
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
      d="M10.667 5.333V3c0-.554 0-.831-.117-1.002a.67.67 0 0 0-.438-.28c-.204-.035-.456.082-.959.314l-5.914 2.73c-.449.207-.673.31-.838.47a1.3 1.3 0 0 0-.324.508C2 5.957 2 6.204 2 6.698V10m9-.333h.007M2 7.467v4.4c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h7.734c.746 0 1.12 0 1.405-.145a1.34 1.34 0 0 0 .583-.583c.145-.285.145-.659.145-1.405v-4.4c0-.747 0-1.12-.145-1.406a1.33 1.33 0 0 0-.583-.582c-.285-.146-.659-.146-1.405-.146H4.133c-.746 0-1.12 0-1.405.146-.25.127-.455.331-.583.582C2 6.347 2 6.72 2 7.467m9.333 2.2a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0"
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

export default CreditCard;