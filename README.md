# sveltekit-architect-repro

Reproduce:

Ensure your credentials are set in `~/.aws/credentials` and your `AWS_PROFILE` and `AWS_REGION` are set

- `npm i`
- `npm run deploy`

This should deploy the app onto your AWS profile, using Architect 9

Ensure your app is accessible via the Api Gateway invoke URL

Switch to the `arc-10` branch

- `npm i`
- `npm run deploy`

This should deploy the app onto your AWS profile, using Architect 10

Ensure your is no longer accessible via the Api Gateway invoke URL

# Explanation

`asap` is trying to get a file, expecting to get `NoSuchKey` exception, and then `passthru`, and the file would get resolved by the next handler.
But `asap` is receiving a 403 because the `s3:listBucket` permission isn't on the bucket created by Architect, and so `asap` bubbles that as a 500

This issue is addressed in `5.0.1` of `asap`
