import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface DialogFailure {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
}

export default function DialogFailure({
  isDialogOpen,
  handleCloseDialog,
}: DialogFailure) {
  return (
    <Transition appear show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Hop, hop, hop!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    T&apos;as déjà rentré ton score ou alors quelqu&apos;un
                    d&apos;autre l&apos;a fait avant toi.
                  </p>
                </div>

                <div className="mt-4 flex justify-between">
                  <Link href="https://media2.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif?cid=ecf05e47ias4l1lntbp36mml5ovr9jdcvl0iaptsmupmm76t&rid=giphy.gif&ct=g">
                    <a
                      target="_blank"
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      C&apos;est qui ce batard ?
                    </a>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleCloseDialog}
                  >
                    Ça vaaaaaaaa !
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
