function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-crochetPrimary-500 text-white px-5 py-2.5 
                hover:bg-crochetPrimary-700 
                focus:ring-2 focus:ring-crochetPrimary-200 
                transition-all duration-200 
                font-sans rounded-lg text-sm
                shadow-md hover:shadow-lg
                border border-crochetPrimary-700/20
                disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
