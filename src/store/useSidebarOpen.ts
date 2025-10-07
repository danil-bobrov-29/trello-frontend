import { create } from 'zustand/react'

interface IState {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
  setToggleOpen: () => void
}

const useSidebarOpen = create<IState>((set) => ({
  isOpen: true,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
  setToggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSidebarOpen
