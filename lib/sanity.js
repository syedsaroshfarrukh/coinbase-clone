import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ic2f8o2v",
  dataset: "production",
  apiVersion: "2022-02-15",
  token:
    "skAg3TdgkBdLYuQbFlh0fr26442xmKG9pga4l8abvLPb8h0o8G0YPZ4jwwSQZEI5yHcB95uDBcqARk4Lj7yi6gXPo4VF5Dp57H5vmxT04Y4OdbU4YI97T8AW5c5VIe4SXQeMvKM93w8wbJNxHQqdFsvmYfCwTyskNEATELJoYZ3EWmRFk600",
  useCdn: false,
});
