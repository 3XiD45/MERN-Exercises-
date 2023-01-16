const getAsyncStories = () =>
new Promise((resolve) =>
setTimeout(
() => resolve({ data: { stories: initialStories } }),
2000
)
);
