import { Popover } from '@headlessui/react';
import logo from '../public/imgs/logo.svg';

export default function Header(props) {
  const { title } = props;
  return (
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
                  <img
                    src={logo.src}
                    alt="tarent Logo"
                    height={36}
                    width={36}
                  />
                  <h2 className="text-lg leading-7 text-gray-900 sm:text-lg sm:truncate ml-3">
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
  )
}
