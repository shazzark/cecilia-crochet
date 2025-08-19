export default function SecondaryButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-crochetSecondary-400 text-crochetText-900 px-5 py-2.5 
                hover:bg-crochetSecondary-600 hover:text-white
                focus:ring-2 focus:ring-crochetSecondary-300 
                transition-all duration-200 
                font-sans rounded-lg text-sm
                shadow-sm hover:shadow-md
                border border-crochetSecondary-600/30
                disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
