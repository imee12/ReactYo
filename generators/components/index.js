'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, options) {

  super(args, options);

  // Make options available


  this.option('name', {
    desc: 'Use this name for component generator',
    type: String,
    defaults: "Component"
  });

  this.log(this.options['name']);
  // this.option('skip-install');

  // Use our plain template as source
  // this.sourceRoot(baseRootPath);

  this.config.save();
}

  prompting() {
    console.log('prompting - zap');
  }

  writing() {
    console.log('writing - zap');
    this.fs.copyTpl(
      this.templatePath('_Component.jsx'),
      this.destinationPath('src/components/' + this.options['name'] + '.jsx'),
      {
        name: this.options['name'],
      },
    );

    this.fs.copyTpl(
      this.templatePath('_Container.jsx'),
      this.destinationPath('src/containers/' + this.options['name'] + '.jsx'),
      {
        name: this.options['name'],
      },
    );

    this.fs.copyTpl(
      this.templatePath('_App.jsx'),
      this.destinationPath('src/components/App.jsx'),
      {
        name: this.options['name'],
      },
    );
  }
};
