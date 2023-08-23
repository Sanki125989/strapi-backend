Strapi-backend
Strapi is an open-source content management system (CMS) and headless CMS framework that allows developers to build, deploy, and manage digital content and APIs for web and mobile applications. It provides a user-friendly interface for content creators to manage and update content while offering developers the flexibility to design and structure their applications as they see fit.
Key features of Strapi include:
Headless Architecture: Strapi follows a headless CMS approach, which means it separates the content management and delivery layers. This allows developers to use the content they manage through Strapi in various front-end frameworks, such as React, Vue.js, Angular, and more.
Customizable Content Types: Strapi enables developers to define and customize content types (such as articles, products, pages, etc.) according to their application's needs. Each content type can have its own set of fields and data structures.
RESTful and GraphQL APIs: Strapi automatically generates RESTful and GraphQL APIs for the content types you define. This makes it easy to fetch and manipulate content from your application's front end.
User Roles and Permissions: Strapi provides a comprehensive system for defining user roles and permissions. This enables you to control what actions different user types can perform within the CMS, ensuring data security and access control.
Plugin Ecosystem: Strapi offers a rich ecosystem of plugins that developers can use to extend the platform's functionality. These plugins can add features like authentication, file upload handling, and more.
Flexible Data Modeling: With Strapi, you can create complex relationships between different content types. This allows you to model your application's data in a way that best represents its structure and requirements.
Webhooks and Events: Strapi allows you to set up webhooks and events to trigger actions when certain events occur, such as when new content is created or updated.
Internationalization (i18n): If your application needs to support multiple languages, Strapi provides built-in support for internationalization, allowing you to manage content translations easily.
Media Library: Strapi includes a media library for managing and organizing media files, such as images, videos, and documents, associated with your content.
Easy Deployment: Strapi can be deployed on various hosting environments, including cloud services like AWS, Heroku, and more. It also provides a Docker image for containerized deployment.
Offline Support: Strapi has an offline mode, which means you can develop and manage content even when not connected to the internet, making it convenient for on-the-go content creation.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
