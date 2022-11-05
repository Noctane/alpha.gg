import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { User } from "@prisma/client";

interface PlayerChoiceProps {
  userId: string | undefined;
  onPlayerChoice: (userId: string) => void;
  userList: User[] | undefined;
}

export default function PlayerChoice({
  userId,
  onPlayerChoice,
  userList,
}: PlayerChoiceProps) {
  const displayUserName = (id: string) => {
    const user = userList && userList.find((user) => user.id === id);
    if (user) return user.name;
  };

  return (
    <div className="w-52">
      <Listbox value={userId} onChange={onPlayerChoice}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-700 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate pl-7 text-slate-300">
              {userId ? (
                <>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-300">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>{" "}
                  {displayUserName(userId)}
                </>
              ) : (
                "Choisis dans la liste"
              )}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {userList
                ? userList.map((user, userIdx) => (
                    <Listbox.Option
                      key={userIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-slate-600 text-slate-50"
                            : "text-slate-300"
                        }`
                      }
                      value={user.id}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {user.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-50">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))
                : null}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
