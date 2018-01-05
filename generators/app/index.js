'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to Imee's Practice ${chalk.red('generator-react')} generator`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name your app ?',
        default: this.name,
      },

    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
      }
    );

    this.fs.copyTpl(
      this.templatePath('./_bower.json'),
      this.destinationPath('bower.json'),
      {
        name: this.props.name,
      }
    );

    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('_index.html'),
      this.destinationPath('index.html')
    );

    this.fs.copy(
      this.templatePath('_history/_configureHistory.js'),
      this.destinationPath('src/history/configureHistory.js')
    );

    this.fs.copy(
      this.templatePath('_index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('_store/_configureStore.js'),
      this.destinationPath('src/store/configureStore.js')
    );

    this.fs.copy(
      this.templatePath('_tests/_App.spec.js'),
      this.destinationPath('test/App.spec.js')
    );

    this.fs.copy(
      this.templatePath('_testSetup.js'),
      this.destinationPath('testSetup.js')
    );

    this.fs.copy(
      this.templatePath('eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );

    this.fs.copy(
      this.templatePath('_App.jsx'),
      this.destinationPath('src/components/App.jsx')
    );

    this.fs.copy(
      this.templatePath('_reducers/_index.js'),
      this.destinationPath('src/reducers/index.js')
    );

    this.fs.copy(
      this.templatePath('_scss/_index.scss'),
      this.destinationPath('src/scss/index.scss')
    );

  }

  initializing() {
    if(!this.options['skip-welcome-message']) {
     this.log('Out of the box I include Webpack and some default React components.\n');
   }
  }

  install() {
    this.installDependencies();
  }
};
