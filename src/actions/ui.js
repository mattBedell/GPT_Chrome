export const selectSlot = slotIdent => {
  return {
    type: 'SELECT_SLOT',
    slotIdent
  }
}
export const selectSlotNav = slotNav => {
  return {
    type: 'SELECT_SLOT_NAV',
    slotNav
  }
};