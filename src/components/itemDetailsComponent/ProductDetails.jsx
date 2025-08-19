// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ProductDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mb-8 border border-gray-200 rounded-lg p-4"
    >
      <h3 className="font-bold mb-3">S12900</h3>
      <h4 className="text-lg font-medium mb-4">Códice Bank</h4>

      <table className="w-full mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-2">Product Default</th>
            <th className="text-left pb-2">Packaging</th>
            <th className="text-left pb-2">Stylizanty Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 pr-4">
              Podpis je za opatření na formuláře uvedených obchodních programů.
              Osobit je na organizačním podpisem a bylo vhodné podporovat na
              organizačním úplně a obvyklostech, které pro hlavě pořádají
              způsoby materiálů a výběrování.
            </td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4"></td>
          </tr>
        </tbody>
      </table>

      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Střední</li>
        <li>Sluvnost</li>
        <li>Tento</li>
        <li>Napodobná příslušenství</li>
      </ul>
    </motion.div>
  );
}

export default ProductDetails;
