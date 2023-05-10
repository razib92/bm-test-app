import { Fragment } from "react";
import {
  Dialog as HeadlessDialog,
  Transition as HeadlessTransition,
} from "@headlessui/react";
import { FunctionComponentEx } from "@/src/types";

export type DialogProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Dialog: FunctionComponentEx<DialogProps> = ({
  children,
  title,
  isOpen,
  onClose,
}) => (
  <HeadlessTransition appear show={isOpen} as={Fragment}>
    <HeadlessDialog as="div" className="relative z-40" onClose={onClose}>
      <HeadlessTransition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </HeadlessTransition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <HeadlessTransition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <HeadlessDialog.Title
                as="div"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                <div className="flex justify-between">
                  <h3>{title}</h3>
                  <button onClick={onClose}>X</button>
                </div>
              </HeadlessDialog.Title>
              <div className="mt-4 text-sm text-gray-500">{children}</div>
            </HeadlessDialog.Panel>
          </HeadlessTransition.Child>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransition>
);
