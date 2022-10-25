# Commerce FrontEnd

## Requirements

Install the dependencies below:

- [Visual Studio Code](https://code.visualstudio.com/download);
- [Node v16.17.1](https://nodejs.org/en/);
- [Git](https://git-scm.com/);
- Yarn - `npm install -g yarn` - install after node.

## Setup

1. Run `git clone https://github.com/zCaioSantos/commerce-frontend.git`;
2. Run `cd commerce-frontend`;
3. Run `yarn`;
4. Run `yarn dev`;

## Developent Environment Setup

1. Run on terminal
```bash
code --install-extension formulahendry.auto-close-tag
code --install-extension steoates.autoimport
code --install-extension formulahendry.auto-rename-tag
code --install-extension aaron-bond.better-comments
code --install-extension naumovs.color-highlight
code --install-extension EditorConfig.EditorConfig
code --install-extension dbaeumer.vscode-eslint
code --install-extension mhutchie.git-graph
code --install-extension donjayamanne.githistory
code --install-extension vector-of-bool.gitflow
code --install-extension eamodio.gitlens
code --install-extension abusaidm.html-snippets
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension Orta.vscode-jest
code --install-extension shd101wyy.markdown-preview-enhanced
code --install-extension christian-kohler.path-intellisense
code --install-extension MS-CEINTL.vscode-language-pack-pt-BR
code --install-extension esbenp.prettier-vscode
code --install-extension SonarSource.sonarlint-vscode
code --install-extension SimonSiefke.svg-preview
code --install-extension Gruntfuggly.todo-tree
code --install-extension styled-components.vscode-styled-components
```
2. In VSCode you copy json below: 
```json
{
 "editor.rulers": [120],
 "editor.wordWrapColumn": 120,
 "editor.formatOnSave": true,
 "editor.defaultFormatter": "esbenp.prettier-vscode",
 "editor.wordWrap": "wordWrapColumn",
 "editor.tabSize": 1,
 "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
 },
 "eslint.packageManager": "yarn",
 "eslint.alwaysShowStatus": true,
 "files.eol": "\r\n",
 "git.confirmSync": false,
 "gitflow.default.production": "main",
 "prettier.bracketSameLine": true,
 "prettier.singleQuote": true,
 "prettier.singleAttributePerLine": true,
 "prettier.tabWidth": 1
}
```
3. Click "F1" and to digit: "Preferências: Abrir as Configurações do Usuário" and paste code copied;
4. Save and close file.

## Assuptions

Assumptions are conventions created to direct the team about best practices and expected behaviors.

### Done work

- ESLint: ok;
- Interfaces: ok;
- Styles: ok;
- Grammar: ok;
- Logic: ok;
- Behavior: ok;
- State with Jotai: ok.

### Best practices

- Avoid using states in components;
- A role should have a single responsibility and as few parameters as possible. Maximum of three parameters;
- Do not duplicate code;
- All Elements without children should be written like this: `<Element />`;
- Never use abbreviations for variables, functions, files and folders;
- Never use inline styles like `style={{marginTop: 10}}`;
- Only add new dependencies upon evaluation;
- Components with integration must contain 4 states:
  - error;
  - loading;
  - success without data;
  - success with data.
- Never change settings without review (Josué);
- Never change Global styles without review (Josué).

### Name conventions

- Folders: [camelCase](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case#camel-case);
- Components:
  - [PascalCase](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case#pascal-case) for Controller and Layout;
  - camelCase for other files.
- Assets:
  - images: [snake_case](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case#snake-case).[jpg | png | svg];
  - fonts: [SCREAM-KEBAB-CASE](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case#kebab-case);
- Naming:
  - components must be used PascalCase because React requires;
  - functions must be used camelCase by convention;
  - consts must be used SCREAMING_SNAKE_CASE by convention;
  - props must be used camelCase by convention.

### Commit pattern

Commits must follow the pattern below:

```text
<type>(optional scope): <description>

[optional body]

[optional footer(s)]
```

If the change knowingly breaks the application, you should include a BREAKING CHANGE footer quickly describing what broke.

When generating a build version using the BUILD footer.

When to use:

- feat: adds new functionality;
- fix: fixes a bug in a feature;
- docs: changes to documentation;
- style: unique style changes such as indentation and semicolon inclusion;
- refactor: restructuring of already written code;
- test: inclusion/maintenance of tests;
- chore: completion of tasks that affect the whole team - settings, generate version;
- perf: alteration that increases, exclusively, the performance.

## Scripts disponíveis

### `yarn dev`

Run the application in a dev environment.
Open <http://localhost:5173/> to view in your browser.

### `yarn build`

Run the application build process. With this the code is prepared to be used in production.

### `yarn sb`

Run the Storybook application.
Open <http://localhost:6006/> to view in your browser.

### `yarn test`

Run tests written in jest once.

### `yarn lint`

Run the lint process and fix errors in all files arranged in the settings.

### `yarn prettier-lint`

Runs the prettier process and corrects code styling errors in all files arranged in the settings.