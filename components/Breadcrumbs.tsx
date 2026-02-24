export default function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a href="https://larrys-world.github.io" className="hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <a href="https://larrys-world.github.io/tools" className="hover:text-gray-900">
            Tools
          </a>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="text-gray-900 font-medium">
          Tip Calculator
        </li>
      </ol>
    </nav>
  )
}