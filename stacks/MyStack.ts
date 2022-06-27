import {
  Api,
  StackContext,
  Table,
  StaticSite,
} from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
  // Create the table
  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
    primaryIndex: { partitionKey: "counter" },
  });

  // Create a HTTP API
  const api = new Api(stack, "Api", {
    customDomain: 
      app.stage == "prod"
        ? {
        domainName: "resume-api.cislaghi.io",
        // domainAlias: "www.domain.com",
        hostedZone: "cislaghi.io"
        }
      : undefined,
    defaults: {
      function: {
        // Allow the API to access the table
        permissions: [table],
        // Pass in the table name to our API
        environment: {
          tableName: table.tableName,
        },
      },
    },
    routes: {
      "POST /": "functions/lambda.main",
    },
  });

  // Deploy our Svelte app
  const site = new StaticSite(stack, "StaticSite", {
    customDomain: 
      app.stage == "prod"
        ? {
        domainName: "francesco.cislaghi.io",
        // domainAlias: "www.domain.com",
        hostedZone: "cislaghi.io"
        }
      : undefined,
    path: "frontend",
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
