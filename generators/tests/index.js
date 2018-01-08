'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, options) {

  super(args, options);

  // Make options available

  this.option('name', {
    desc: 'Use this name for of test generator',
    type: String,
    defaults: "Component"
  });

  this.option('path', {
    desc: 'path for test begining from root/test',
    type: String
  });

  this.config.save();
}

  prompting() {
    this.log('prompting - zap');
  }

  writing() {
    this.log('writing - zap');

    const componentDestination = this.options.path
      ? `test/${this.options.path}/${this.options.name}.jsx`
      : `test/${this.options.name}.jsx`;
    
    this.fs.copyTpl(
      this.templatePath('_Component.jsx'),
      this.destinationPath(componentDestination),
      {
        name: this.options['name'],
      }
    );
  }
};
