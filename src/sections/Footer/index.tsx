export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center text-sm text-gray-500">
        Informações do app. Essa versão é de {process.env.NODE_ENV},
        na url: {process.env.NEXT_PUBLIC_API_URL ?? 'indefinida'}
        <br />
        com o nome{' '}<span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> {process.env.PROJECT_NAME}</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
      </div>
    </footer>
  )
}