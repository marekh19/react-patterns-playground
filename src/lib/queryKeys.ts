export const todoKeys = {
  all: ["posts"] as const,
  lists: () => [...todoKeys.all, "lists"] as const,
};
