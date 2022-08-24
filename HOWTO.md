# 📕 Additional improvements

## 🖥 FrontEnd side

- Include a clear button in the right of the text field in order to delete the whole typed text.

  - Go to the `src/view/pages/Home/components/SearchBox/SearchBox.component.tsx` file,
  - add a button after the input field, which wraps a X icon,
  - assign an onClick event to the button and bind it with the specific handler,
  - the handler must mutate the search param,
  - it's done provinding to the SearchBox component, the setSearchParams mutator from the parent comonent (HomePage),
  - every time the X button is pressed, the 'searchParams.search' field is reset.

- Add buttons in the filters section in order to select/deselect all filters.

  - Go to the `src/view/pages/Home/components/SearchBox/SearchBox.component.tsx` file,
  - in the block where the filters are displayed,
  - insert two action buttons for selecting/unselecting the whole filters,
  - for the selecting button, define an event handler which includes the whole filters in the searchParams,
  - for the unselecting button, define an event handler which erases the whole filters in the searchParams,
  - bind every event handler with its respective button.

- Add options in the filters section in order to selected the filtering strategy (AND | OR).

  - Go to the `src/view/pages/Home/components/SearchBox/SearchBox.component.tsx` file,
  - in the block where the filters are displayed,
  - insert a checkbox element, unselected by default,
  - assign a filtering value to the default state,
  - define a component state in charge to storage the status of the selection,
  - define an onChange event handler and bind it with the checkbox,
  - the event handler will change the filtering value selection,
  - provide that new piece of informtation to the searchParams,
  - in the API, define a new function which is able to filter the matching companies with an `every` array method,
  - create a selection function which determinates which option (`some` or `every`) to apply, based on the provided search param.

- In the retrieved company cards, highlight its specialities which match with the included into the filters selection.
- Select/deselect specialities directly from the filtered company cards.
- Retrieve the defined specialities directly from the API via a specific custom hook.
- Implement Cypress for tests E2E.
- Improve the accessibility (a11n).
- Apply internationalization (i18n).

  - Go to the `next.config.js` file,
  - introduce the internationalization configuration,

    ```
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en'
    }
    ```

  - create the `/locales` folder into the `/src/view` layer,
  - create the default language dictionary,
  - create the other selected languages dictionaries,
  - in the page main file, retrieve the locale field from static props,
  - select the required dictionary and pass it to the `HomePage` component as property,
  - replace the static texts with the translated option.


- 🗄 BackEnd side
  - Implement a validation system which checks the incoming data from the client, in the handler method.
  - Implement a pagination system in order to provide the requested results in chunks, improving the benchmark of the API.
  - Implement a specific endpoint in order to provided the persisted specialities.
  - In case the code uses a database persistance layer, to implement the `repository` and `orm` layers into the `infrastructure` to provide a better coupling between the application business logic and the persistance layer/resources.
  - Replace API REST by GraphQL.