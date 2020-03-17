import CoronaIcon from '../components/icons/Corona';

export default function Header() {
  return (
    <header className="mx-auto flex flex-col justify-center border-t-4 border-teal-500">
      <div className="inline-flex mx-auto items-center w-full px-4 lg:px-0 lg:w-1/2">
        <CoronaIcon className="w-10 h-10 mr-2 fill-current text-teal-500" />
        <h1 className="text-xl md:text-3xl font-semibold bold my-8">
          <span className="text-teal-500 font-bold">COVID-19</span> Info Portal
        </h1>
      </div>
    </header>
  );
}
