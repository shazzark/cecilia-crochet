import { Link } from "react-router-dom";
function FooterloginLink() {
  return (
    <div className="px-8 pb-8 text-center">
      <p className="text-sm text-crochetPrimary-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-crochetAccent-500 hover:text-crochetAccent-600"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default FooterloginLink;
