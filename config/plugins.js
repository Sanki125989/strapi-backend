module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: "AKIA5RIJTFVUMNTL6QUL",
        secret: "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",
        amazon: "https://email.us-east-1.amazonaws.com",
      },
      settings: {
        defaultFrom: "praffull.w@quadwave.com",
        defaultReplyTo: "praffull.w@quadwave.com",
      },
    },
  },
});
