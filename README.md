![Repository cover](./docs/img/repo-cover.png)

# Cosuno coding challenge

## 📝 Challenge description
Create a simple React application that shows a list of construction companies, each with the
following information:
- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City

The following should be possible:
- Search for a company by typing into a search field. The search term gets matched only
against the company name and the list of companies is filtered based on the search term
in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a
particular speciality (e.g. only Plumbing).

Create a simple API based on Node.js that returns the list of companies to the frontend. The
API can read the data from a simple JSON source, no database setup is required.

In addition, make a list of ideas on how you would improve this application if you had more time
to work on it.

## 🏗 Challenge implementation

### 📖 Index

-   [Description](#description)
-   [System requirements](#requirements)
-   [Code architehture](#architehture)
    -   [FrontEnd side](#architehture-front)
    -   [BackEnd side](#architehture-back)
    -   [Other elements](#architehture-other)
-   [Commands guide](#commands)
    -   [Switch Node version](#commands-switch-node)
    -   [Modules installation process](#commands-installation)
    -   [Run tests](#commands-tests)
    -   [Run Storybook](#commands-storybook)
    -   [Run application in development mode](#commands-dev-mode)
    -   [Build application](#commands-pro-mode)
-   [Additional improvements](#improvements)

### <a id="description"></a>🔍 Description

This repository is based on NextJS, using TypeScript.

I have implement the whole solution into the home page and the companies data is retrieve from the API.

The code implement the OR filtering strategy. It means that the API will return companies which match with some of the provided filtering specialities. In addition, the code filters first by the search text introduced in the text field and then, the result obtained of this initial screening, is provided to the second filter where are analyzed the provided specialities.

In the backend side, the companies information is provided from a fixture file imported in the controllers layer.

The companies will be displayed into a card, including the next information: name, city, specialities and logo.

I have implemented a system of path aliases for the import instructions, based on the `tsconfig.path.json` file, in order to provide better maintenance and refactoring options.

Some tools used on this repository are next:

-   📦 `NextJS` as framework for the application.
-   ✉️ `SWR` for data fetching and cache memory manager.
-   💅 `TailwindCSS` as styling library.
-   🧪 `Jest` for unit testing and `Testing Library` for components testing.
-   📕 `Storybook` for components documentation.
-   🔍 `ESLint` for code linting and formating.
-   🐶 `Husky` for Git hooks management.

### <a id="requirements"></a>💻 System requirements

To run this code in your system, it must satisfy the next minimum requirements:

-   NodeJS 16.15.0
-   npm 8.5.5
-   npx 8.5.5

In addition, it's advisable to have next:

-   nvm 0.39.1
-   Web browser (recomended Google Chrome 88.0)
-   Code editor (recomended VSCode 1.52.1)

### <a id="architehture"></a>🏛 Code architehture

The code is organized following the guidelines indicated by the NextJS official documentation.

This way, the API endpoints as well as the different pages of the application will be located into the `/pages` folder.

The static files, such as the company logos, will be placed into the `/public` folder.

Finally, the rest of the application code will be located into the `/src` folder. At this last folder I have distributed the code in different layers which I explain in the next sections:

#### <a id="architehture-front"></a>🖥 FrontEnd side

The whole FrontEnd code is placed into the `/src/view` layer.

I have done it this way in prder to provide a decoupling level enough in order to ensure the scalability and maintainability of this part of the application.

Into this folder, we can find seceral directories with the next function:

- 📂 `components`
  
  Here are defined the visual components that are common for the whole application.

  All the component folders contain the component definition, stories and testing files. A small exception to this rule is the `/icons` directory that contains the implementation of SVG images as React components.

  I have not included stories and tests for these icons because they are displayed and tested on other visual components that already have their own stories and tests.

- 📂 `hooks`
  
  Here I have implemented the only custom hook that I needed for the application: `useCompany`.

  In this hook I have defined a fetcher method which has a high coupling level with the hook business logic. I have done it explicitly this way because the fetcher is close bound with the target of the hook.

- 📂 `layouts`
  
  This folder contains the only layout used in the application.

- 📂 `pages`
  
  In this folder I define the pages (just one page in the case of this application) as single components that are imported in the specific file into the `/pages` at the root of the proyect.

  This way I am able to decouple the visual application from the used framework, NextJS in this case. This provides me the option of migrating from NextJS to other project configuration, `create-react-app` for instance, easily. 

  In order to implement the `Home` page I have followed the co-location principle through which, the folder that contains the page definition has an inner `components` folder which includes the visual elements directly bound with this page.

- 📂 `styles`
  
  This folder contains the only styles file where there are defined the TailwindCSS imports.

#### <a id="architehture-back"></a>🗄 BackEnd side

The whole BackEnd code is placed into the `/src/infrastructure` layer.

For this case, I have proposed a _three-layers-architecture_ composed by _router_, _handler_ and _controller_.

The idea is that the `router` defines the endpoint to connect with. This layer is already provided by NextJS via its own endpoints definitions, so here I have not done much work beyon to define the endpoins.

The requests sent to a specific route are managed by its `handler`, which will perform the needed operations in order to analyze and parse the received data.

Finally, the `handler` invokes the specific `controller`, providing the required arguments to process the request and return the expected response.

Into this folder, we can find seceral directories with the next function:

- 📂 `handlers`
  
  Contains this layer code definitions.

- 📂 `controllers`
  
  Contains this layer code definitions.

- 📂 `errors`
  
  Contains the custom API error definitions which will be triggered by the controllers after detecting any exception.

- 📂 `mappers`
  
  Due to there are some cases where I have to ensure the data has a specific structure and content, I reach this goal via the implementation of the `mapper` patter.

#### <a id="architehture-other"></a>⚙ Other elements

There are several common folders/layers which are placed into the `/src` folder. These elements are next:

- 📂 `@types`

  This folder contains the global data types definitions for TypeScript.

  I have made these definitions as global due to they are used in both sides, FronEnd and BackEnd.

- 📂 `test`

  This folder does not contain test but it is defined to host testing util methos or fixtures, usefull for multiple use cases.


### <a id="commands"></a>🔥 Commands guide

#### <a id="commands-switch-node"></a>✅ Switch Node version

```sh
nvm use
```

#### <a id="commands-installation"></a>⬇️ Modules installation process

```sh
npm i
```

#### <a id="commands-tests"></a>🧪 Run tests

```sh
# Unit and integration tests.
npm test
# Watch mode.
npm run test:watch
```

#### <a id="commands-storybook"></a>📕 Run Storybook

```sh
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

#### <a id="commands-dev-mode"></a>🏭 Run application in development mode

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### <a id="commands-pro-mode"></a>🚀 Build application

```sh
npm run build
```

### <a id="improvements"></a>📕 Additional improvements

- 🖥 FrontEnd side
  - Inlcude a clear button in the right of the text filed in order to delete the whole typed text.
  - Add buttons in the filters section in order to select/deselect all filters.
  - Add options in the filters section in order to selected the filtering strategy (AND | OR).
  - In the retrieved company cards, highlight its specialities which match with the included into the filters selection.
  - Select/deselect specialities directly from the filtered company cards.
  - Retrieve the defined specialities directly from the API via a specific custom hook.
  - Implement Cypress for tests E2E.
  - Improve the accessibility (a11n).
  - Apply internationalization (i18n).

- 🗄 BackEnd side
  - Implement a validation system which checks the incoming data from the client, in the handler method.
  - Implement a pagination system in order to provide the requested results in chunks, improving the benchmark of the API.
  - Implement a specific endpoint in order to provided the persisted specialities.
  - In case the code uses a database persistance layer, to implement the `repository` and `orm` layers into the `infrastructure` to provide a better coupling between the application business logic and the persistance layer/resources.
  - Replace API REST by GraphQL.

