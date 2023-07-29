export default ({ env }) => ({
  upload:
    process.env.NODE_ENV === "production"
      ? {
          config: {
            provider: "aws-s3",
            providerOptions: {
              baseUrl: env("CDN_URL"),
              rootPath: env("CDN_ROOT_PATH", ""),
              s3Options: {
                accessKeyId: env("AWS_ACCESS_KEY_ID"),
                secretAccessKey: env("AWS_ACCESS_SECRET"),
                region: env("AWS_REGION"),
                params: {
                  ACL: "private",
                  signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
                  Bucket: env("AWS_BUCKET_NAME"),
                },
              },
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        }
      : {},
});
