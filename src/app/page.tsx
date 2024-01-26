import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Control, Input, Prefix } from './components/Input'
import { SettingsTabs } from './components/SettingsTabs'
import * as FileInput from './components/Form/FileInput'
import { SelectItem } from './components/Form/Select/SelectItem'
import { Select } from './components/Form/Select'
import { TextArea } from './components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div className="spcace-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input>
                <Control id="firstName" defaultValue={'Wilson'} />
              </Input>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>

                <Input>
                  <Control id="lastName" defaultValue="Lima" />
                </Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <Input>
              <Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Prefix>
              <Control
                id="email"
                type="email"
                defaultValue="wilson@email.com"
              />
            </Input>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="space-y-2 text-sm font-medium text-zinc-700"
            >
              Yor photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                This will be diplayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input>
              <Control id="role" defaultValue="CTO" />
            </Input>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="us" text="Estados Unidos" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              TimeZone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="pacific" text="Pacific Standard (UTC-08:00)" />
            </Select>
          </div>
          <div className=" grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Write a short introdution.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <button type="button" className=" p-2 hover:bg-zinc-50">
                    <Bold className="h-4 w-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button type="button" className=" p-2 hover:bg-zinc-50">
                    <Italic
                      className="h-4 w-4 text-zinc-500 "
                      strokeWidth={3}
                    />
                  </button>
                  <button type="button" className=" p-2 hover:bg-zinc-50">
                    <Link className="h-4 w-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button type="button" className=" p-2 hover:bg-zinc-50">
                    <List className="h-4 w-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button type="button" className=" p-2 hover:bg-zinc-50">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 "
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea id="bio" defaultValue="I`m teste " />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portifolio"
              className="space-y-2 text-sm font-medium text-zinc-700"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
