import { Link } from "react-router-dom";

function FooterSignup() {
  return (
    <div className="px-8 pb-6 text-center">
      <p className="text-sm text-crochetPrimary-600">
        New to our yarn community?{" "}
        <Link
          to="/register"
          className="font-medium text-crochetAccent-500 hover:text-crochetAccent-600"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default FooterSignup;
