import { useState } from "react";
import { Dialog } from '@headlessui/react'

type Props = {
  drawerOpen: boolean;
  onToggleDrawer: () => void;
  onSort: (filter: Filter) => void;
};

export const Sidebar = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const onToggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Dialog open={drawerOpen} onClose={() => setDrawerOpen(false)}>
    </Dialog>
  )
}