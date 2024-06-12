import { createSelector } from "@reduxjs/toolkit"

export const selectUsers = state => state.mailbox.users
export const selectFilter = state => state.mailbox.filter

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, localFilter) => {
    return users.filter(
      (user) =>
        user.userName.toLowerCase().includes(localFilter.toLowerCase()) ||
        user.userEmail.toLowerCase().includes(localFilter.toLowerCase())
    );
  }
);







